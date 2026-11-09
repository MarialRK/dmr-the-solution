'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { navigation } from '@/content/site'

export function MobileNav({ className }: { className: string }) {
  const menu = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (menu.current) menu.current.open = false
  }, [pathname])

  return (
    <details className={className} ref={menu}>
      <summary>Menu</summary>
      <nav aria-label="Mobile">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  )
}
