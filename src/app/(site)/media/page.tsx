import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { formatDate, getAppearances, isSafeLink } from '@/lib/cms'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Media',
  description: 'Public appearances and recognition for Daniel Marial Reng Kudum.',
}

export default async function MediaPage() {
  const appearances = await getAppearances()
  return (
    <>
      <PageIntro title="Media" intro="Public appearances, speaking and recognition." />
      <section className={`${s.section} ${s.first}`}>
        {appearances.map((item) => {
          const image = typeof item.image === 'object' ? item.image : null
          return (
            <article className={s.entry} key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p className={s.status}>
                  {item.kind}, {formatDate(item.date)}
                </p>
              </div>
              <div>
                {image?.url ? <Image className={s.entryImage} src={image.url} alt={image.alt} width={image.width ?? 900} height={image.height ?? 600} sizes="(max-width: 800px) 100vw, 45vw" /> : null}
                <p>{item.description}</p>
                {isSafeLink(item.link) ? (
                  <p>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                      Read the source
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          )
        })}
        <article className={s.entry}>
          <div>
            <h3>ALU Ventures Lab Demo Day</h3>
            <p className={s.status}>Recognition, 2025</p>
          </div>
          <p>Nile Green Packaging was named winner, with a US$30,000 prize.</p>
        </article>
        <p className={s.path}>For interviews, speaking or press enquiries, please get in touch.</p>
        <Link className={s.button} href="/contact">
          Contact me
        </Link>
      </section>
    </>
  )
}
