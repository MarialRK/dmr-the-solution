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
