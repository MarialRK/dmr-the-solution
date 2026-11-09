import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageIntro } from '@/components/PageIntro'
import { formatDate, getArticle, getArticles } from '@/lib/cms'
import s from '@/components/Inner.module.css'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (await getArticles()).map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle((await params).slug)
  return article ? { title: article.title, description: article.summary } : {}
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle((await params).slug)
  if (!article) notFound()
  return (
    <>
      <PageIntro title={article.title} intro={formatDate(article.publishedOn)} />
      <article className={`${s.section} ${s.first} ${s.article}`}>
        <RichText data={article.body} />
      </article>
    </>
  )
}
