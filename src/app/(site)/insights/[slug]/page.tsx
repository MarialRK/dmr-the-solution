import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageIntro } from '@/components/PageIntro'
import { writtenArticles } from '@/content/articles'
import { formatDate, getArticle, getInsights } from '@/lib/cms'
import s from '@/components/Inner.module.css'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (await getInsights()).map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = (await getArticle(slug)) ?? writtenArticles.find((item) => item.slug === slug)
  return article ? { title: article.title, description: article.summary } : {}
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const fromCms = await getArticle(slug)
  const written = fromCms ? undefined : writtenArticles.find((item) => item.slug === slug)
  if (!fromCms && !written) notFound()
  const title = fromCms?.title ?? written!.title
  const date = fromCms?.publishedOn ?? written!.publishedOn

  return (
    <>
      <PageIntro title={title} intro={formatDate(date)} />
      <article className={`${s.section} ${s.first} ${s.article}`}>
        {fromCms ? (
          <RichText data={fromCms.body} />
        ) : (
          written!.body.map((block, index) =>
            block.type === 'h2' ? <h2 key={index}>{block.text}</h2> : <p key={index}>{block.text}</p>,
          )
        )}
        <p className={s.byline}>Daniel Marial Reng Kudum</p>
        <div className={s.links}>
          <Link href="/insights">More insights</Link>
          <Link href="/contact">Get in touch</Link>
        </div>
      </article>
    </>
  )
}
