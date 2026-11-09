import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/PageIntro'
import { Ventures } from '@/components/Ventures'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Companies founded, projects built and creative work by Daniel Marial Reng Kudum, each shown with its current status.',
}

const brands = [
  { name: 'DMR The Solution', src: '/logos/dmr-logo-black.svg', w: 3766, h: 1112 },
  { name: 'Nile Green Group', src: '/logos/nile-green-group.jpg', w: 1080, h: 590 },
  { name: 'Nile Green Packaging', src: '/logos/nile-green-packaging.jpg', w: 1024, h: 1024 },
  { name: 'Nile Vertex Properties', src: '/logos/nile-vertex-properties.jpg', w: 906, h: 1080 },
]

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
        <h2>Brand identities</h2>
        <div className={s.logoGrid}>
          {brands.map((brand) => (
            <Image key={brand.name} src={brand.src} alt={`${brand.name} logo`} width={brand.w} height={brand.h} sizes="(max-width: 800px) 45vw, 22vw" />
          ))}
        </div>
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
    </>
  )
}
