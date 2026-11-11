import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageIntro } from '@/components/PageIntro'
import { Placeholder } from '@/components/Placeholder'
import { services } from '@/content/services'
import { getServices, getSettings } from '@/lib/cms'
import s from '@/components/Inner.module.css'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = (await getServices()).find((item) => item.slug === slug)
  return service ? { title: service.name, description: service.summary } : {}
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = (await getServices()).find((item) => item.slug === slug)
  const { hiddenServices } = await getSettings()
  if (!service || hiddenServices.includes(service.slug)) notFound()

  return (
    <>
      <PageIntro title={service.name} intro={service.description} />
      {service.visuals ? (
        <section className={`${s.section} ${s.first}`}>
          <h2 className={s.heading}>Work you can see</h2>
          <div className={s.showcase}>
            {service.visuals.map((visual) => (
              <figure key={visual.src}>
                <Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 800px) 100vw, 31vw" />
                <figcaption>{visual.caption}</figcaption>
              </figure>
            ))}
          </div>
          {service.visualsNote ? <p className={s.note}>{service.visualsNote}</p> : null}
          <div className={s.links}>
            <Link className={s.button} href={`/contact?service=${service.slug}`}>
              {service.action}
            </Link>
          </div>
        </section>
      ) : null}
      <section className={`${s.section} ${service.visuals ? s.alt : s.first} ${s.split}`}>
        <div className={s.sticky}>
          <p className={s.status}>{service.availability}</p>
          <Link className={s.button} href={`/contact?service=${service.slug}`}>
            {service.action}
          </Link>
        </div>
        <div>
          <div className={s.block}>
            <h2>Why it matters</h2>
            <p>{service.problem}</p>
          </div>
          {service.audience ? (
            <div className={s.block}>
              <h2>Who it is for</h2>
              <p>{service.audience}</p>
            </div>
          ) : null}
          <div className={s.block}>
            <h2>What I offer</h2>
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
              <h2>How I work</h2>
              <ul className={s.list}>
                {service.standards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {service.limits ? (
            <div className={s.block}>
              <h2>Good to know</h2>
              <ul className={s.list}>
                {service.limits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className={s.block}>
            <h2>Examples</h2>
            {service.examples ? (
              <ul className={s.list}>
                {service.examples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : service.visuals ? (
              <p>See the work at the top of this page.</p>
            ) : (
              <Placeholder label="Examples of this work to be added" />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
