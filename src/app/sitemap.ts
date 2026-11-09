import type { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { getArticles, getSettings } from '@/lib/cms'

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || ''
  const [{ hiddenServices }, articles] = await Promise.all([getSettings(), getArticles()])
  const paths = [
    '',
    '/about',
    '/work',
    '/work/suddsight',
    '/portfolio',
    '/services',
    '/insights',
    '/media',
    '/contact',
    '/privacy',
    ...services.filter((service) => !hiddenServices.includes(service.slug)).map((service) => `/services/${service.slug}`),
    ...articles.map((article) => `/insights/${article.slug}`),
  ]
  return paths.map((path) => ({ url: `${base}${path}` }))
}
