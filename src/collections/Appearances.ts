import type { CollectionConfig } from 'payload'
import { isLoggedIn, publishedOrLoggedIn } from '@/lib/access'
import { refreshAfterChange, refreshAfterDelete } from '@/lib/revalidate'

const paths = ['/about']

export const Appearances: CollectionConfig = {
  slug: 'appearances',
  labels: { singular: 'Media item', plural: 'Media items' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'date', 'kind', 'published'], group: 'Content' },
  access: { read: publishedOrLoggedIn, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [refreshAfterChange(paths)], afterDelete: [refreshAfterDelete(paths)] },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'kind',
      label: 'Type',
      type: 'select',
      required: true,
      options: ['Interview', 'Speaking', 'Conference', 'Event', 'Publication', 'Recognition'],
    },
    { name: 'date', type: 'date', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'link', label: 'Link to source', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'uploads' },
    { name: 'published', label: 'Show on website', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
  ],
}
