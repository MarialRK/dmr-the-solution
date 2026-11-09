import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageIntro } from '@/components/PageIntro'
import { services } from '@/content/services'
import { getSettings } from '@/lib/cms'
import s from '@/components/Inner.module.css'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  return service ? { title: service.name, description: service.summary } : {}
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  const { hiddenServices } = await getSettings()
  if (!service || hiddenServices.includes(service.slug)) notFound()

  return (
    <>
      <PageIntro title={service.name} intro={service.description} />
      <section className={`${s.section} ${s.first} ${s.split}`}>
        <div className={s.sticky}>
          <p className={s.status}>{service.availability}</p>
          <Link className={s.button} href={`/contact?service=${service.slug}`}>
            {service.action}
          </Link>
        </div>
        <div>
          <div className={s.block}>
            <h2>The problem it solves</h2>
            <p>{service.problem}</p>
          </div>
          {service.audience ? (
            <div className={s.block}>
              <h2>Who it is for</h2>
              <p>{service.audience}</p>
            </div>
          ) : null}
          <div className={s.block}>
            <h2>What it covers</h2>
            <ul className={s.list}>
              {service.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {service.process ? (
            <div className={s.block}>
              <h2>How it works</h2>
              <ol className={s.list}>
                {service.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ) : null}
          <div className={s.block}>
            <h2>What you receive</h2>
            <p>{service.receives}</p>
          </div>
          {service.standards ? (
            <div className={s.block}>
              <h2>Standards</h2>
              <ul className={s.list}>
                {service.standards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {service.limits ? (
            <div className={s.block}>
              <h2>What this does not include</h2>
              <ul className={s.list}>
                {service.limits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {service.examples ? (
            <div className={s.block}>
              <h2>Examples</h2>
              <ul className={s.list}>
                {service.examples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
