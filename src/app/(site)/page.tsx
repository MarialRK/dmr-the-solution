import Image from 'next/image'
import Link from 'next/link'
import { Ventures } from '@/components/Ventures'
import { selectedWork, serviceGroups, site } from '@/content/site'
import { formatDate, getArticles, getSettings } from '@/lib/cms'
import styles from './page.module.css'

export default async function HomePage() {
  const [{ hiddenServices }, articles] = await Promise.all([getSettings(), getArticles(3)])
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Founder',
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: site.socials.map((social) => social.href),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />
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
              <h3>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</h3>
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

      <section className={styles.process}>
        <h2>How a project works</h2>
        <ol>
          <li>
            <h3>Tell me what you need</h3>
            <p>Send an enquiry, even if the idea is still rough.</p>
          </li>
          <li>
            <h3>Agree the scope</h3>
            <p>You receive a written scope and a quotation based on the actual work.</p>
          </li>
          <li>
            <h3>The work gets done</h3>
            <p>I deliver against the agreed scope and share progress along the way.</p>
          </li>
          <li>
            <h3>You receive the finished work</h3>
            <p>Final files or a live website, in the formats agreed at the start.</p>
          </li>
        </ol>
      </section>

      <section className={styles.services}>
        <h2>What you can bring to me</h2>
        <div className={styles.groups}>
          {serviceGroups.map((group) => (
            <div key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.services.filter((service) => !hiddenServices.includes(service.slug)).map((service) => (
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

      <section className={styles.gallery}>
        <figure className={styles.galleryWide}>
          <Image src="/images/demo-day-prize.jpg" alt="Daniel shaking hands on stage while holding a US$30,000 prize cheque made out to Nile Green Packaging at ALU Ventures Lab Demo Day" width={1280} height={960} sizes="(max-width: 800px) 100vw, 62vw" />
          <figcaption>Receiving the Ventures Lab Demo Day prize for Nile Green Packaging, December 2025.</figcaption>
        </figure>
        <div className={styles.recognition}>
          <h2>Recognition</h2>
          <dl>
            <dt>ALU Ventures Lab Demo Day</dt>
            <dd>Winner in December 2025 with Nile Green Packaging, with a US$30,000 prize.</dd>
            <dt>Mastercard Foundation Scholar</dt>
            <dd>African Leadership University.</dd>
            <dt>Millennium Fellow</dt>
            <dd>Class of 2024.</dd>
          </dl>
          <Link className={styles.textLink} href="/about#credentials">
            Education, awards and certifications
          </Link>
        </div>
      </section>

      <section className={styles.insights}>
        <h2>Insights</h2>
        {articles.length ? (
          <div className={styles.articles}>
            {articles.map((article) => (
              <p key={article.id}>
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                <span>{formatDate(article.publishedOn)}</span>
              </p>
            ))}
          </div>
        ) : (
          <p>
            Writing on building businesses, sustainability and technology will be published here. Until then, you can
            follow my updates on{' '}
            <a href={site.socials[0].href} rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            .
          </p>
        )}
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
