import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Placeholder } from '@/components/Placeholder'
import { site } from '@/content/site'
import { formatDate, getArticles } from '@/lib/cms'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Writing by Daniel Marial Reng Kudum on building businesses, sustainability and technology.',
}

export default async function InsightsPage() {
  const articles = await getArticles()
  return (
    <>
      <PageIntro title="Insights" intro="Writing on building businesses, sustainability and technology." />
      <section className={`${s.section} ${s.first}`}>
        {articles.length ? (
          articles.map((article) => (
            <Link className={s.serviceRow} href={`/insights/${article.slug}`} key={article.id}>
              <h2>{article.title}</h2>
              <div>
                <p>{article.summary}</p>
                <p className={s.status}>{formatDate(article.publishedOn)}</p>
              </div>
            </Link>
          ))
        ) : (
          <>
            <div className={s.placeholders}>
              <Placeholder label="Article to be published" />
              <Placeholder label="Article to be published" />
              <Placeholder label="Article to be published" />
            </div>
            <p className={s.path}>Follow along on LinkedIn for updates.</p>
            <a className={s.button} href={site.socials[0].href} rel="noopener noreferrer" target="_blank">
              Follow on LinkedIn
            </a>
          </>
        )}
      </section>
    </>
  )
}
