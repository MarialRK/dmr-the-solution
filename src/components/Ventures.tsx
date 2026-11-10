import Image from 'next/image'
import { holdingCompany, ventures } from '@/content/site'
import styles from './Ventures.module.css'

export function Ventures() {
  return (
    <>
      <article className={styles.holding}>
        <div className={styles.holdingLogo}>
          <Image src={holdingCompany.logo} alt={`${holdingCompany.name} logo`} width={holdingCompany.width} height={holdingCompany.height} sizes="360px" />
        </div>
        <div>
          <h3>{holdingCompany.name}</h3>
          <p className={styles.status}>{holdingCompany.role}</p>
          <p>{holdingCompany.summary}</p>
        </div>
      </article>
      <div className={styles.list}>
        {ventures.map((venture) => (
          <article key={venture.name}>
            <div className={styles.logo}>
              <Image src={venture.logo} alt={`${venture.name} logo`} width={venture.width} height={venture.height} sizes="200px" />
            </div>
            <h3>{venture.name}</h3>
            <p className={styles.status}>{venture.role}</p>
            <p>{venture.summary}</p>
          </article>
        ))}
      </div>
      <figure className={styles.figure}>
        <Image src="/images/production-site.jpg" alt="Daniel in a safety vest and gloves sorting stacks of paper bags at Nile Green Packaging" width={1280} height={718} sizes="(max-width: 800px) 100vw, 90vw" />
        <figcaption>At Nile Green Packaging’s manual production site.</figcaption>
      </figure>
      <p className={styles.separate}>These are separate businesses. They are not part of DMR’s services.</p>
    </>
  )
}
