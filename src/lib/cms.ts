import config from '@payload-config'
import { getPayload } from 'payload'
import { site } from '@/content/site'
import type { Appearance, Article, PortfolioItem } from '@/payload-types'

export const getCms = () => getPayload({ config })

export type PublicSettings = { publicEmail?: string | null; whatsapp: string; hiddenServices: string[] }

export async function getSettings(): Promise<PublicSettings> {
  try {
    const cms = await getCms()
    const settings = await cms.findGlobal({ slug: 'site-settings', overrideAccess: false })
    return {
      publicEmail: settings.publicEmail,
      whatsapp: settings.whatsapp || site.whatsapp,
      hiddenServices: settings.hiddenServices ?? [],
    }
  } catch (error) {
    console.error('Could not load site settings', error)
    return { whatsapp: site.whatsapp, hiddenServices: [] }
  }
}

async function list<T>(load: () => Promise<{ docs: T[] }>): Promise<T[]> {
  try {
    return (await load()).docs
  } catch (error) {
    console.error('Could not load content', error)
    return []
  }
}

export const getArticles = async (limit = 50): Promise<Article[]> => {
  const cms = await getCms()
  return list(() => cms.find({ collection: 'articles', overrideAccess: false, sort: '-publishedOn', limit, depth: 0 }))
}

export const getArticle = async (slug: string): Promise<Article | undefined> => {
  const cms = await getCms()
  const docs = await list(() =>
    cms.find({ collection: 'articles', overrideAccess: false, where: { slug: { equals: slug } }, limit: 1 }),
  )
  return docs[0]
}

export const getAppearances = async (): Promise<Appearance[]> => {
  const cms = await getCms()
  return list(() => cms.find({ collection: 'appearances', overrideAccess: false, sort: '-date', limit: 100, depth: 1 }))
}

export const getPortfolioItems = async (): Promise<PortfolioItem[]> => {
  const cms = await getCms()
  return list(() => cms.find({ collection: 'portfolio-items', overrideAccess: false, limit: 100, depth: 1 }))
}

export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value))

export const isSafeLink = (value?: string | null): value is string => Boolean(value && /^https?:\/\//i.test(value))

export type InsightSummary = { id: string; slug: string; title: string; summary: string; publishedOn: string }

export async function getInsights(limit?: number): Promise<InsightSummary[]> {
  const { writtenArticles } = await import('@/content/articles')
  const fromCms = (await getArticles()).map((article) => ({
    id: String(article.id),
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    publishedOn: article.publishedOn,
  }))
  const written = writtenArticles
    .filter((article) => !fromCms.some((item) => item.slug === article.slug))
    .map(({ slug, title, summary, publishedOn }) => ({ id: slug, slug, title, summary, publishedOn }))
  const all = [...fromCms, ...written].sort((a, b) => b.publishedOn.localeCompare(a.publishedOn))
  return limit ? all.slice(0, limit) : all
}

export async function getServices() {
  const { services } = await import('@/content/services')
  try {
    const cms = await getCms()
    const { docs } = await cms.find({ collection: 'service-texts', limit: 100, depth: 0, overrideAccess: false })
    return services.map((service) => {
      const edit = docs.find((doc) => doc.service === service.slug)
      if (!edit) return service
      const scope = edit.scope?.split('\n').map((line) => line.trim()).filter(Boolean)
      return {
        ...service,
        availability: edit.availability || service.availability,
        summary: edit.summary || service.summary,
        description: edit.description || service.description,
        problem: edit.problem || service.problem,
        audience: edit.audience || service.audience,
        scope: scope?.length ? scope : service.scope,
        receives: edit.receives || service.receives,
      }
    })
  } catch (error) {
    console.error('Could not load service wording', error)
    return services
  }
}

export async function getAboutPage(): Promise<{ headline?: string | null; paragraphs: string[] }> {
  try {
    const cms = await getCms()
    const about = await cms.findGlobal({ slug: 'about-page', overrideAccess: false })
    const paragraphs = (about.introduction ?? '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
    return { headline: about.headline, paragraphs }
  } catch (error) {
    console.error('Could not load About page', error)
    return { paragraphs: [] }
  }
}

export const getProjects = async () => {
  const cms = await getCms()
  return list(() => cms.find({ collection: 'projects', overrideAccess: false, sort: 'order', limit: 100, depth: 0 }))
}
