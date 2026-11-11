import type { CollectionConfig } from 'payload'
import { isLoggedIn } from '@/lib/access'
import { refreshSiteAfterChange } from '@/lib/revalidate'
import { services } from '@/content/services'

const refresh = () => refreshSiteAfterChange({} as never)

export const ServiceTexts: CollectionConfig = {
  slug: 'service-texts',
  labels: { singular: 'Service wording', plural: 'Service wording' },
  admin: {
    useAsTitle: 'service',
    group: 'Content',
    description:
      'Change the wording of a service page. Choose the service, then fill in only the parts you want to change. Anything left empty keeps the current wording.',
  },
  access: { read: () => true, create: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [() => refresh()], afterDelete: [() => refresh()] },
  fields: [
    {
      name: 'service',
      type: 'select',
      required: true,
      unique: true,
      options: services.map((service) => ({ label: service.name, value: service.slug })),
    },
    { name: 'availability', type: 'text', admin: { description: 'For example: Available now' } },
    { name: 'summary', label: 'Short summary (shown on the Services page)', type: 'textarea' },
    { name: 'description', label: 'Introduction (top of the service page)', type: 'textarea' },
    { name: 'problem', label: 'Why it matters', type: 'textarea' },
    { name: 'audience', label: 'Who it is for', type: 'textarea' },
    { name: 'scope', label: 'What I offer (one item per line)', type: 'textarea' },
    { name: 'receives', label: 'What you receive', type: 'textarea' },
  ],
}
