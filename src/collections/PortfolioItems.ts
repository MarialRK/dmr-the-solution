import type { CollectionConfig } from 'payload'
import { isLoggedIn, publishedOrLoggedIn } from '@/lib/access'
import { refreshAfterChange, refreshAfterDelete } from '@/lib/revalidate'

const paths = ['/work']

export const portfolioCategories = [
  'Brand Identity',
  'Publications and Catalogues',
  'Software and Data',
  'Websites',
  'Social Media and Digital Communication',
  'Video and Campaign Content',
  'Business Documents',
]

export const PortfolioItems: CollectionConfig = {
  slug: 'portfolio-items',
  labels: { singular: 'Portfolio item', plural: 'Portfolio items' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'status', 'published'], group: 'Content' },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [refreshAfterChange(paths)], afterDelete: [refreshAfterDelete(paths)] },
  fields: [
    { name: 'title', label: 'Project name', type: 'text', required: true },
    { name: 'category', type: 'select', required: true, options: portfolioCategories },
    { name: 'status', label: 'Outcome or current status', type: 'text', required: true },
    { name: 'description', label: 'Brief description', type: 'textarea', required: true },
    { name: 'objective', label: 'Problem or objective', type: 'textarea' },
    { name: 'contribution', label: 'My contribution', type: 'textarea' },
    { name: 'tools', label: 'Tools used', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'uploads' },
    { name: 'link', type: 'text' },
    { name: 'published', label: 'Show on website', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
  ],
}
