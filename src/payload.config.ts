import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Appearances } from './collections/Appearances'
import { Articles } from './collections/Articles'
import { Enquiries } from './collections/Enquiries'
import { PortfolioItems } from './collections/PortfolioItems'
import { Uploads } from './collections/Uploads'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { migrations } from './migrations'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  admin: { user: Users.slug, meta: { titleSuffix: ' | DMR dashboard' }, importMap: { baseDir: dirname } },
  collections: [Enquiries, Articles, Appearances, PortfolioItems, Uploads, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  graphQL: { disable: true },
  telemetry: false,
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
    push: false,
    prodMigrations: migrations,
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { uploads: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],
  sharp,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  onInit: async (payload) => {
    const email = process.env.ADMIN_EMAIL
    const password = process.env.ADMIN_PASSWORD
    if (!email || !password) return
    const { totalDocs } = await payload.count({ collection: 'users', overrideAccess: true })
    if (totalDocs === 0) {
      await payload.create({ collection: 'users', data: { email, password }, overrideAccess: true })
    }
  },
})
