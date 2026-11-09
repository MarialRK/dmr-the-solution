import type { CollectionConfig } from 'payload'
import { isLoggedIn } from '@/lib/access'

export const Uploads: CollectionConfig = {
  slug: 'uploads',
  labels: { singular: 'Image', plural: 'Images' },
  admin: { group: 'Content' },
  access: { read: () => true, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    imageSizes: [{ name: 'card', width: 900 }],
    adminThumbnail: 'card',
  },
  fields: [{ name: 'alt', label: 'Describe the image', type: 'text', required: true }],
}
