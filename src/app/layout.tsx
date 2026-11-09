import type { Metadata } from 'next'
import '@fontsource-variable/bodoni-moda/index.css'
import '@fontsource-variable/hanken-grotesk/index.css'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.brand}`, template: `%s | ${site.brand}` },
  description:
    'Daniel Marial Reng Kudum is a founder and software engineer working across business, technology, design and sustainability. DMR — The Solution helps people and organisations turn ideas into action.',
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
      </body>
    </html>
  )
}
