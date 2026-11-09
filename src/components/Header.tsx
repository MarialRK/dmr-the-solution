import Image from 'next/image'
import Link from 'next/link'
import { MobileNav } from '@/components/MobileNav'
import { navigation } from '@/content/site'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="DMR The Solution, home">
        <Image src="/logos/dmr-logo-black.svg" alt="" width={3766} height={1112} priority />
      </Link>
      <MobileNav className={styles.mobile} />
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
