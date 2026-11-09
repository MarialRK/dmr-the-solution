import styles from './PageIntro.module.css'

export function PageIntro({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className={styles.intro}>
      <h1>{title}</h1>
      {intro ? <p>{intro}</p> : null}
      <svg viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 18 C 150 18 250 150 500 150 C 760 150 1010 58 1215 58 C 1320 58 1400 92 1440 132 L1440 170 L0 170 Z" />
      </svg>
    </section>
  )
}
