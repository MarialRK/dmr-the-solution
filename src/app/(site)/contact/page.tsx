import type { Metadata } from 'next'
import { Suspense } from 'react'
import { EnquiryForm } from '@/components/EnquiryForm'
import { PageIntro } from '@/components/PageIntro'
import { services } from '@/content/services'
import { site } from '@/content/site'
import { getSettings } from '@/lib/cms'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Daniel Marial Reng Kudum about a project, service or idea.',
}

export default async function ContactPage() {
  const settings = await getSettings()
  const available = services
    .filter((service) => !settings.hiddenServices.includes(service.slug))
    .map(({ slug, name }) => ({ slug, name }))

  return (
    <>
      <PageIntro title="Tell me what you need." intro="Clients are welcome from anywhere. Send an enquiry here, or message me on WhatsApp." />
      <section className={`${s.section} ${s.first} ${s.split}`}>
        <Suspense>
          <EnquiryForm services={available} />
        </Suspense>
        <div>
          <a className={s.button} href={settings.whatsapp} rel="noopener noreferrer" target="_blank">
            Message me on WhatsApp
          </a>
          {settings.publicEmail ? (
            <p className={s.path}>
              <a href={`mailto:${settings.publicEmail}`}>{settings.publicEmail}</a>
            </p>
          ) : (
            <p className={s.path}>Email address to be added.</p>
          )}
          <div className={s.links}>
            {site.socials.map((social) => (
              <a key={social.label} href={social.href} rel="noopener noreferrer" target="_blank">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
