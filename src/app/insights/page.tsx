import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { site } from '@/content/site'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Writing by Daniel Marial Reng Kudum on building businesses, sustainability and technology.',
}

export default function InsightsPage() {
  return (
    <>
      <PageIntro title="Insights" intro="Writing on building businesses, sustainability and technology will be published here." />
      <section className={`${s.section} ${s.first}`}>
        <p className={s.path}>No articles have been published yet. Follow along on LinkedIn for updates.</p>
        <a className={s.button} href={site.socials[0].href} rel="noopener noreferrer" target="_blank">
          Follow on LinkedIn
        </a>
      </section>
    </>
  )
}
