import type { GlobalConfig } from 'payload'
import { isLoggedIn } from '@/lib/access'
import { refreshSiteAfterChange } from '@/lib/revalidate'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About page',
  admin: {
    group: 'Content',
    description: 'Change the heading and opening paragraphs of the About page. Leave a field empty to keep the current wording.',
  },
  access: { read: () => true, update: isLoggedIn },
  hooks: { afterChange: [refreshSiteAfterChange] },
  fields: [
    { name: 'headline', type: 'text' },
    {
      name: 'introduction',
      label: 'Opening paragraphs',
      type: 'textarea',
      admin: { description: 'Leave an empty line between paragraphs.' },
    },
  ],
}
