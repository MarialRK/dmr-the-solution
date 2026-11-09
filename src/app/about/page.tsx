import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/PageIntro'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'About',
  description: 'Daniel Marial Reng Kudum is a South Sudanese entrepreneur and software engineer, and the founder of Nile Green Group.',
}

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Steady work, in service of the places I come from." />
      <section className={`${s.section} ${s.first} ${s.split}`}>
        <div className={s.photo}>
          <Image src="/images/flags-hall.jpg" alt="Daniel standing beside the flag of South Sudan in a hall of national flags" width={720} height={1280} sizes="(max-width: 800px) 100vw, 42vw" priority />
        </div>
        <div className={s.prose}>
          <p>
            I am a South Sudanese entrepreneur and software engineer. I work across business, technology,
            design and sustainability, because the problems I care about rarely stay inside one discipline.
          </p>
          <p>
            I founded Nile Green Group, a Kigali-based holding company that owns and invests in businesses
            including Nile Green Packaging in Juba and Nile Vertex Properties in Kigali. I want these
            businesses to create real economic value while contributing to sustainable development and jobs.
          </p>
          <h2>Building a company around a plastic problem</h2>
          <p>
            Nile Green Packaging makes biodegradable paper packaging to replace single-use plastic. It began
            with pilot production and is now moving towards automated manufacturing. In 2025 it won ALU
            Ventures Lab Demo Day, with a US$30,000 prize.
          </p>
          <h2>Using software on problems close to home</h2>
          <p>
            SuddSight, my software engineering capstone, applies machine learning and satellite data to flood
            risk in South Sudan’s Sudd Wetland. I dedicated the work to communities in Bor South, Twic East, Duk,
            Fangak, Panyijiar, Mayendit, Leer, Baliet, Panyikang and Malakal, whose repeated exposure to
            flooding shaped its design.
          </p>
          <p>
            Before that, I spent a year as a Software Engineering Intern at Trinity Technologies in Juba,
            working with a team on web and mobile applications.
          </p>
        </div>
      </section>
      <section className={`${s.section} ${s.dark}`}>
        <p className={s.quote}>Lasting change comes less from grand declarations than from disciplined work.</p>
      </section>
      <section className={`${s.section} ${s.split}`}>
        <div className={s.prose}>
          <h2>Background</h2>
          <p>English and Arabic are my working languages, and Dinka is my first language.</p>
          <ul className={s.facts}>
            <li>Bachelor’s degree in Computer Software Engineering, African Leadership University, 2023–2026</li>
            <li>Mastercard Foundation Scholar</li>
            <li>Carbon and ESG Analysis programme, University of Cambridge Online</li>
          </ul>
        </div>
        <div className={s.photo} style={{ maxWidth: 380 }}>
          <Image src="/images/alu-portrait.jpg" alt="Daniel in a dark suit holding a document folder at African Leadership University" width={850} height={1279} sizes="380px" />
        </div>
      </section>
    </>
  )
}
