import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import { formerServices } from './src/content/services'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
]

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**.public.blob.vercel-storage.com' }],
  },
  async redirects() {
    return [
      { source: '/work', destination: '/ventures', permanent: true },
      { source: '/work/suddsight', destination: '/ventures/suddsight', permanent: true },
      { source: '/media', destination: '/about#media', permanent: true },
      ...Object.entries(formerServices).map(([from, to]) => ({
        source: `/services/${from}`,
        destination: `/services/${to}`,
        permanent: true,
      })),
    ]
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
}

export default withPayload(nextConfig)
