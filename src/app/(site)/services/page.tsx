import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { groups, services } from '@/content/services'
import { getSettings } from '@/lib/cms'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Design, social media, video, websites, business documents, writing, consultancy and ESG advisory from DMR — The Solution.',
}

export default async function ServicesPage() {
  const { hiddenServices } = await getSettings()
  return (
    <>
      <PageIntro
        title="Bring me the problem. We will agree what solves it."
        intro="Every project starts with a written scope and a quotation based on what you actually need. Services are available to clients internationally."
      />
      <section className={`${s.section} ${s.first}`}>
        {groups.map((group) => (
          <div className={s.group} key={group}>
            <p className={s.groupTitle}>{group}</p>
            {services
              .filter((service) => service.group === group && !hiddenServices.includes(service.slug))
              .map((service) => (
                <Link className={s.serviceRow} href={`/services/${service.slug}`} key={service.slug}>
                  <h3>{service.name}</h3>
                  <div>
                    <p>{service.summary}</p>
                    <p className={s.status}>{service.availability}</p>
                  </div>
                </Link>
              ))}
          </div>
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
