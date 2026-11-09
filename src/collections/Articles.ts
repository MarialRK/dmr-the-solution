import type { CollectionConfig } from 'payload'
import { isLoggedIn, publishedOrLoggedIn } from '@/lib/access'
import { refreshAfterChange, refreshAfterDelete } from '@/lib/revalidate'

const paths = ['/', '/insights', '/insights/[slug]', '/sitemap.xml']

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: { singular: 'Article', plural: 'Articles' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'publishedOn', 'published'], group: 'Content' },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [refreshAfterChange(paths)], afterDelete: [refreshAfterDelete(paths)] },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      label: 'Web address',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Lowercase words joined by hyphens, for example: lessons-from-juba' },
      validate: (value: string | null | undefined) =>
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value ?? '') || 'Use lowercase letters, numbers and hyphens only.',
    },
    { name: 'summary', type: 'textarea', required: true, maxLength: 240 },
    { name: 'body', label: 'Article', type: 'richText', required: true },
    { name: 'publishedOn', label: 'Publication date', type: 'date', required: true, admin: { position: 'sidebar' } },
    { name: 'published', label: 'Show on website', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
  ],
}
