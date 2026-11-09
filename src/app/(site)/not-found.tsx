import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import s from '@/components/Inner.module.css'

export default function NotFound() {
  return (
    <>
      <PageIntro title="This page does not exist." />
      <section className={`${s.section} ${s.first}`}>
        <Link className={s.button} href="/">
          Go to the homepage
        </Link>
      </section>
    </>
  )
}
