import Image from 'next/image'
import Link from 'next/link'
import { Ventures } from '@/components/Ventures'
import { selectedWork, serviceGroups, site } from '@/content/site'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Daniel Marial
            <br />
            Reng Kudum
          </h1>
          <p className={styles.statement}>
            I started a packaging company in Juba and built a flood-risk system for the Sudd. Now I help
            people and organisations turn their own ideas into work that gets finished.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/work">
              See my work
            </Link>
            <Link className={styles.secondary} href="/contact">
              Start an enquiry
            </Link>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image
            src="/images/portrait-hero.jpg"
            alt="Daniel Marial Reng Kudum in a navy suit and red tie"
            width={774}
            height={1080}
            priority
            sizes="(max-width: 800px) 90vw, 46vw"
          />
        </div>
        <svg className={styles.line} viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 18 C 150 18 250 150 500 150 C 760 150 1010 58 1215 58 C 1320 58 1400 92 1440 132 L1440 170 L0 170 Z" />
        </svg>
      </section>

      <section className={styles.practice}>
        <div className={styles.practiceImages}>
          <Image
            src="/images/flags-hall.jpg"
            alt="Daniel standing beside the flag of South Sudan in a hall of national flags"
            width={720}
            height={1280}
            sizes="(max-width: 800px) 46vw, 25vw"
          />
          <Image
            src="/images/at-work.jpg"
            alt="Daniel working on a laptop at a curved wooden desk"
            width={592}
            height={1080}
            sizes="(max-width: 800px) 46vw, 25vw"
          />
        </div>
        <div className={styles.practiceText}>
          <h2>Most of my work begins with something that does not exist yet.</h2>
          <p>
            At Nile Green, that meant biodegradable paper packaging to replace single-use plastic in South
            Sudan. For my software engineering capstone, it meant a system that estimates flood risk across
            the Sudd and shows why it reached each result.
          </p>
          <p>
            Through DMR, I bring the same practical approach to other people’s ideas: brands, websites, social
            media, video, business documents and advice.
          </p>
        </div>
      </section>

      <section className={styles.work}>
        <h2>Selected work</h2>
        <ul>
          {selectedWork.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <div>
                <p className={styles.status}>{item.status}</p>
                <p>{item.summary}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link className={styles.textLink} href="/work">
          View all work
        </Link>
      </section>

      <section className={styles.services}>
        <h2>What you can bring to me</h2>
        <div className={styles.groups}>
          {serviceGroups.map((group) => (
            <div key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>{service.name}</Link>
                    {service.note ? <span> ({service.note.toLowerCase()})</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ventures}>
        <h2>Companies I have founded</h2>
        <Ventures />
      </section>

      <section className={styles.insights}>
        <h2>Insights</h2>
        <p>
          Writing on building businesses, sustainability and technology will be published here. Until then,
          you can follow my updates on{' '}
          <a href={site.socials[0].href} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          .
        </p>
      </section>

      <section className={styles.invitation}>
        <h2>Have an idea? Let’s build it.</h2>
        <Link className={styles.invert} href="/contact">
          Tell me what you need
        </Link>
      </section>
    </>
  )
}
