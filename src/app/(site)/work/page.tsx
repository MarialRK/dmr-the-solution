import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Ventures } from '@/components/Ventures'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Companies founded, projects built and creative work by Daniel Marial Reng Kudum, each shown with its current status.',
}

export default function WorkPage() {
  return (
    <>
      <PageIntro title="What I have built, and how far each piece has come." />
      <section className={`${s.section} ${s.first}`}>
        <h2>Companies</h2>
        <Ventures />
      </section>
      <section className={`${s.section} ${s.alt}`}>
        <h2 className={s.heading}>Projects</h2>
        <article className={s.entry}>
          <div>
            <h3>SuddSight</h3>
            <p className={s.status}>Deployed research prototype, completed as my software engineering capstone</p>
          </div>
          <dl>
            <dt>Objective</dt>
            <dd>Estimate flood risk in South Sudan’s Sudd Wetland and show why each estimate was reached.</dd>
            <dt>My contribution</dt>
            <dd>Designed and built the system, from data preparation and model training to the public dashboard.</dd>
            <dt>Scope</dt>
            <dd>Ten counties, January 2023 to December 2024, using historical satellite and flood records.</dd>
            <dt>Tools</dt>
            <dd>Python, XGBoost, SHAP, FastAPI, React and Leaflet.</dd>
            <dd>
              <Link href="/work/suddsight">Read the full case study</Link>
            </dd>
          </dl>
        </article>
        <article className={s.entry}>
          <div>
            <h3>GreenSphere</h3>
            <p className={s.status}>In development at Nile Green Packaging</p>
          </div>
          <p>An in-house environmental data platform for plastic tracking and forest monitoring.</p>
        </article>
        <article className={s.entry}>
          <div>
            <h3>NG-Collect</h3>
            <p className={s.status}>In development at Nile Green Packaging</p>
          </div>
          <p>An in-house system for automated waste classification.</p>
        </article>
      </section>
      <section className={s.section}>
        <h2 className={s.heading}>Community</h2>
        <article className={s.entry}>
          <div>
            <h3>Clean-up campaigns with Save the Nile</h3>
            <p className={s.status}>Ongoing, from time to time, through Nile Green Packaging</p>
          </div>
          <div>
            <p>Nile Green Packaging joins clean-up campaigns in collaboration with Save the Nile.</p>
            <Image className={s.entryImage} src="/images/cleanup-team.jpg" alt="Volunteers in high-visibility vests beside filled refuse sacks during a clean-up campaign" width={1080} height={810} sizes="(max-width: 800px) 100vw, 45vw" />
          </div>
        </article>
      </section>
      <section className={`${s.section} ${s.alt}`}>
        <h2 className={s.heading}>Experience</h2>
        <article className={s.entry}>
          <div>
            <h3>Trinity Technologies Ltd</h3>
            <p className={s.status}>Completed, September 2024 to August 2025</p>
          </div>
          <p>Software Engineering Intern in Juba, helping design, develop and test web and mobile applications.</p>
        </article>
      </section>
      <section className={`${s.section} ${s.dark}`}>
        <h2>See the logos, publications and other pieces.</h2>
        <div className={s.links}>
          <Link className={`${s.button} ${s.light}`} href="/portfolio">
            View portfolio
          </Link>
        </div>
      </section>
    </>
  )
}
