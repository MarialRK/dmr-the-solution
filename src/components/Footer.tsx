import Image from 'next/image'
import Link from 'next/link'
import { navigation, site } from '@/content/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Image src="/logos/dmr-logo-white.svg" alt="DMR The Solution" width={3766} height={1112} />
      </div>
      <nav aria-label="Footer">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={styles.connect}>
        <a href={site.whatsapp} rel="noopener noreferrer" target="_blank">
          WhatsApp
        </a>
        {site.socials.map((social) => (
          <a key={social.label} href={social.href} rel="noopener noreferrer" target="_blank">
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
