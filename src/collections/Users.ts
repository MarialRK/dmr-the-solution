import type { CollectionConfig } from 'payload'
import { isLoggedIn } from '@/lib/access'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: { useAsTitle: 'email', group: 'Settings' },
  auth: { maxLoginAttempts: 5, lockTime: 15 * 60 * 1000, tokenExpiration: 4 * 60 * 60 },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  fields: [],
}
