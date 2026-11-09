import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/PageIntro'
import { site } from '@/content/site'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Daniel Marial Reng Kudum about a project, service or idea.',
}

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Tell me what you need." intro="Clients are welcome from anywhere. The quickest way to reach me is WhatsApp." />
      <section className={`${s.section} ${s.first} ${s.split}`}>
        <div>
          <a className={s.button} href={site.whatsapp} rel="noopener noreferrer" target="_blank">
            Message me on WhatsApp
          </a>
          <div className={s.links}>
            {site.socials.map((social) => (
              <a key={social.label} href={social.href} rel="noopener noreferrer" target="_blank">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className={s.photo} style={{ maxWidth: 380 }}>
          <Image src="/images/portrait-close.jpg" alt="Portrait of Daniel Marial Reng Kudum" width={770} height={1080} sizes="380px" />
        </div>
      </section>
    </>
  )
}
