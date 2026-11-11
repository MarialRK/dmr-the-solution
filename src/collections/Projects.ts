import type { CollectionConfig } from 'payload'
import { isLoggedIn, publishedOrLoggedIn } from '@/lib/access'
import { refreshAfterChange, refreshAfterDelete } from '@/lib/revalidate'

const paths = ['/ventures']

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projects' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'published'],
    group: 'Content',
    description: 'Projects added here appear on the Ventures page, after the existing projects.',
  },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  defaultSort: 'order',
  hooks: { afterChange: [refreshAfterChange(paths)], afterDelete: [refreshAfterDelete(paths)] },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'status', type: 'text', required: true, admin: { description: 'Be specific, for example: In development, Completed 2026, Concept' } },
    { name: 'description', type: 'textarea', required: true },
    { name: 'link', type: 'text' },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar', description: 'Lower numbers appear first' } },
    { name: 'published', label: 'Show on website', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
  ],
}
