'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useSearchParams } from 'next/navigation'
import { startTransition, useActionState, type FormEvent } from 'react'
import { submitEnquiry, type EnquiryState } from '@/app/(site)/contact/actions'
import styles from './EnquiryForm.module.css'

type Option = { slug: string; name: string }

const CUSTOM = "Have an Idea? Let's Build It."
const initial: EnquiryState = { status: 'idle' }
const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p className={styles.error} id={id}>
      {message}
    </p>
  ) : null
}

export function EnquiryForm({ services }: { services: Option[] }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial)
  const params = useSearchParams()
  const selected = services.find((service) => service.slug === params.get('service'))?.name ?? ''
  const errors = state.errors ?? {}

  // Submitting this way keeps what the visitor typed when a field needs correcting.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    startTransition(() => action(data))
  }

  if (state.status === 'success') {
    return (
      <div className={styles.done} role="status">
        <h2>Your enquiry has been sent.</h2>
        <p>Thank you. I will reply to the email address you gave.</p>
      </div>
    )
  }

  const describe = (name: keyof NonNullable<EnquiryState['errors']>) =>
    errors[name] ? { 'aria-invalid': true, 'aria-describedby': `${name}-error` } : {}

  return (
    <form action={action} onSubmit={handleSubmit} className={styles.form} noValidate>
      {state.status === 'error' && state.message ? (
        <p className={styles.summary} role="alert">
          {state.message}
        </p>
      ) : null}

      <fieldset className={styles.choice} {...describe('enquiringAs')}>
        <legend>I am enquiring as</legend>
        <label>
          <input type="radio" name="enquiringAs" value="Individual" defaultChecked /> An individual
        </label>
        <label>
          <input type="radio" name="enquiringAs" value="Organisation" /> An organisation
        </label>
      </fieldset>
      <FieldError id="enquiringAs-error" message={errors.enquiringAs} />

      <label htmlFor="service">What do you need?</label>
      <select id="service" name="service" required defaultValue={selected} key={selected} {...describe('service')}>
        <option value="" disabled>
          Choose a service
        </option>
        {services.map((service) => (
          <option key={service.slug} value={service.name}>
            {service.name}
          </option>
        ))}
        <option value={CUSTOM}>{CUSTOM}</option>
      </select>
      <FieldError id="service-error" message={errors.service} />

      <div className={styles.pair}>
        <div>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required {...describe('name')} />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required {...describe('email')} />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div className={styles.pair}>
        <div>
          <label htmlFor="country">Country</label>
          <input id="country" name="country" autoComplete="country-name" required {...describe('country')} />
          <FieldError id="country-error" message={errors.country} />
        </div>
        <div>
          <label htmlFor="organisation">Organisation (optional)</label>
          <input id="organisation" name="organisation" autoComplete="organization" />
        </div>
      </div>

      <label htmlFor="message">Tell me about your project or idea</label>
      <textarea id="message" name="message" rows={6} required {...describe('message')} />
      <FieldError id="message-error" message={errors.message} />

      <label htmlFor="timeline">Preferred timeline (optional)</label>
      <input id="timeline" name="timeline" />

      <div className={styles.trap} aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {turnstileKey ? (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile" data-sitekey={turnstileKey} />
        </>
      ) : null}

      <p className={styles.note}>
        Your details are used only to respond to this enquiry. See the <Link href="/privacy">privacy policy</Link>.
      </p>
      <button type="submit" disabled={pending}>
        {pending ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}
