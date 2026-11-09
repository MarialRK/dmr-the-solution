import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Media',
  description: 'Public appearances and recognition for Daniel Marial Reng Kudum.',
}

export default function MediaPage() {
  return (
    <>
      <PageIntro title="Media" intro="Public appearances, speaking and recognition." />
      <section className={`${s.section} ${s.first}`}>
        <article className={s.entry}>
          <div>
            <h3>ALU Ventures Lab Demo Day</h3>
            <p className={s.status}>2025</p>
          </div>
          <p>Nile Green Packaging was named winner, with a US$30,000 prize.</p>
        </article>
        <p className={s.path}>For interviews, speaking or press enquiries, please get in touch.</p>
        <Link className={s.button} href="/contact">
          Contact me
        </Link>
      </section>
    </>
  )
}
