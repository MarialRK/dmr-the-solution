import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import '@fontsource-variable/bodoni-moda/index.css'
import '@fontsource-variable/hanken-grotesk/index.css'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/content/site'

export const revalidate = 300

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: { siteName: site.brand, type: 'website', images: [{ url: '/images/portrait-close.jpg' }] },
  title: { default: `${site.name} | ${site.brand}`, template: `%s | ${site.brand}` },
  description:
    'Daniel Marial Reng Kudum is a founder and software engineer working across business, technology, design and sustainability. DMR — The Solution offers design, digital, communication and business services to clients internationally.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
