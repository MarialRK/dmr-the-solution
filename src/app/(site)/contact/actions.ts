'use server'

import { createHash } from 'crypto'
import { headers } from 'next/headers'
import { services } from '@/content/services'
import { getCms } from '@/lib/cms'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'enquiringAs' | 'service' | 'name' | 'email' | 'country' | 'message', string>>
}

const CUSTOM = "Have an Idea? Let's Build It."
const MAX_PER_HOUR = 5

const text = (form: FormData, key: string, max: number) => String(form.get(key) ?? '').trim().slice(0, max)

async function passesTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  const body = new URLSearchParams({ secret, response: token, remoteip: ip })
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body })
  const result = (await response.json()) as { success?: boolean }
  return result.success === true
}

async function notify(to: string, subject: string, body: string, replyTo: string) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.ENQUIRY_FROM_EMAIL
  if (!apiKey || !from) return
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, text: body, reply_to: replyTo }),
  })
  if (!response.ok) console.error('Enquiry notification failed', response.status)
}

export async function submitEnquiry(_previous: EnquiryState, form: FormData): Promise<EnquiryState> {
  // Automated submissions fill this hidden field; people never see it.
  if (text(form, 'website', 200)) return { status: 'success' }

  const data = {
    enquiringAs: text(form, 'enquiringAs', 20),
    service: text(form, 'service', 120),
    name: text(form, 'name', 120),
    email: text(form, 'email', 200),
    organisation: text(form, 'organisation', 160),
    country: text(form, 'country', 100),
    timeline: text(form, 'timeline', 120),
    message: text(form, 'message', 5000),
  }

  const allowedServices = [...services.map((service) => service.name), CUSTOM]
  const errors: EnquiryState['errors'] = {}
  if (!['Individual', 'Organisation'].includes(data.enquiringAs)) errors.enquiringAs = 'Choose individual or organisation.'
  if (!allowedServices.includes(data.service)) errors.service = 'Choose what you need help with.'
  if (data.name.length < 2) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = 'Enter a valid email address, like name@example.com.'
  if (data.country.length < 2) errors.country = 'Enter your country.'
  if (data.message.length < 10) errors.message = 'Tell me a little more about what you need.'
  if (Object.keys(errors).length) return { status: 'error', message: 'Please correct the highlighted fields.', errors }

  const requestHeaders = await headers()
  const ip = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  try {
    if (!(await passesTurnstile(text(form, 'cf-turnstile-response', 4096), ip))) {
      return { status: 'error', message: 'The security check did not complete. Please try again.' }
    }

    const cms = await getCms()
    const senderHash = createHash('sha256').update(`${ip}${process.env.PAYLOAD_SECRET}`).digest('hex')
    const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    const { totalDocs } = await cms.count({
      collection: 'enquiries',
      overrideAccess: true,
      where: { and: [{ senderHash: { equals: senderHash } }, { createdAt: { greater_than: hourAgo } }] },
    })
    if (totalDocs >= MAX_PER_HOUR) {
      return { status: 'error', message: 'Too many enquiries were sent from this connection. Please try again in an hour, or use WhatsApp.' }
    }

    await cms.create({ collection: 'enquiries', overrideAccess: true, data: { ...data, senderHash, status: 'New' } })

    try {
      const settings = await cms.findGlobal({ slug: 'site-settings', overrideAccess: true })
      if (settings.notificationEmail) {
        await notify(
          settings.notificationEmail,
          `New DMR enquiry: ${data.service}`,
          `From: ${data.name} (${data.email})\nEnquiring as: ${data.enquiringAs}\nOrganisation: ${data.organisation || 'Not given'}\nCountry: ${data.country}\nTimeline: ${data.timeline || 'Not given'}\n\n${data.message}`,
          data.email,
        )
      }
    } catch (error) {
      console.error('Enquiry saved, but notification failed', error)
    }

    return { status: 'success' }
  } catch (error) {
    console.error('Enquiry could not be saved', error)
    return { status: 'error', message: 'Your enquiry could not be sent. Please try again, or use WhatsApp.' }
  }
}
