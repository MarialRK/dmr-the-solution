import type { GlobalConfig } from 'payload'
import { isLoggedIn } from '@/lib/access'
import { refreshSiteAfterChange } from '@/lib/revalidate'
import { services } from '@/content/services'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: { group: 'Settings' },
  access: { read: () => true, update: isLoggedIn },
  hooks: { afterChange: [refreshSiteAfterChange] },
  fields: [
    { name: 'publicEmail', label: 'Email shown on website', type: 'email' },
    {
      name: 'notificationEmail',
      label: 'Send new enquiries to this email',
      type: 'email',
      access: { read: ({ req }) => Boolean(req.user) },
    },
    { name: 'whatsapp', label: 'WhatsApp link', type: 'text', defaultValue: 'https://wa.me/250798619965' },
    {
      name: 'hiddenServices',
      label: 'Services to hide',
      type: 'select',
      hasMany: true,
      options: services.map((service) => ({ label: service.name, value: service.slug })),
    },
  ],
}
