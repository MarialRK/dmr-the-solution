import type { CollectionConfig } from 'payload'
import { isLoggedIn } from '@/lib/access'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  labels: { singular: 'Enquiry', plural: 'Enquiries' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'service', 'status', 'createdAt'], group: 'Enquiries' },
  access: { create: () => false, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  defaultSort: '-createdAt',
  fields: [
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'New',
      options: ['New', 'Replied', 'In discussion', 'Won', 'Closed'],
      admin: { position: 'sidebar' },
    },
    { name: 'name', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'email', type: 'email', required: true, admin: { readOnly: true } },
    { name: 'enquiringAs', label: 'Enquiring as', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'organisation', type: 'text', admin: { readOnly: true } },
    { name: 'country', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'service', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'timeline', label: 'Preferred timeline', type: 'text', admin: { readOnly: true } },
    { name: 'message', type: 'textarea', required: true, admin: { readOnly: true } },
    { name: 'notes', label: 'My private notes', type: 'textarea' },
    { name: 'senderHash', type: 'text', index: true, admin: { hidden: true } },
  ],
}
