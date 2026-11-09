import Image from 'next/image'
import Link from 'next/link'
import { navigation } from '@/content/site'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="DMR The Solution, home">
        <Image src="/logos/dmr-logo-black.svg" alt="" width={3766} height={1112} priority />
      </Link>
      <details className={styles.mobile}>
        <summary>Menu</summary>
        <nav aria-label="Mobile">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
      <nav className={styles.desktop} aria-label="Main">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
