import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { getServices, getSettings } from '@/lib/cms'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Branding, websites, presentations, digital communication, software, writing, consultancy and personal branding from DMR — The Solution.',
}

export default async function ServicesPage() {
  const [{ hiddenServices }, services] = await Promise.all([getSettings(), getServices()])
  return (
    <>
      <PageIntro
        title="Bring me the problem. We will agree what solves it."
        intro="Every project starts with a written scope and a quotation based on what you actually need. Services are available to clients internationally."
      />
      <section className={`${s.section} ${s.first}`}>
        {services
          .filter((service) => !hiddenServices.includes(service.slug))
          .map((service) => (
            <Link className={s.serviceRow} href={`/services/${service.slug}`} key={service.slug}>
              <h2>
                <span className={s.number}>{service.number}</span>
                {service.name}
              </h2>
              <div>
                <p>{service.summary}</p>
                <p className={s.status}>{service.availability}</p>
              </div>
            </Link>
          ))}
      </section>
      <section className={`${s.section} ${s.dark}`}>
        <h2>Have an idea? Let’s build it.</h2>
        <p className={s.path}>If what you need does not fit neatly into a category, tell me about it and we can work out the right approach.</p>
        <Link className={`${s.button} ${s.light}`} href="/contact">
          Tell me what you need
        </Link>
      </section>
    </>
  )
}
