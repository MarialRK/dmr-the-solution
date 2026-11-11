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
            Nile Green Packaging makes biodegradable paper packaging to replace single-use plastic. It began by importing
            bags to fill customer orders, added its own manual production, and is now working towards automated
            manufacturing. In 2025 it won ALU
            Ventures Lab Demo Day, with a US$30,000 prize.
          </p>
          <figure className={s.figure}>
            <Image src="/images/production-site.jpg" alt="Daniel sorting stacks of paper bags at Nile Green Packaging" width={1280} height={718} sizes="(max-width: 800px) 100vw, 50vw" />
            <figcaption>At our manual production site.</figcaption>
          </figure>
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
        <h2>Milestones</h2>
        <ol className={s.timeline}>
          <li><span>2023</span><p>Began studying software engineering at African Leadership University as a Mastercard Foundation Scholar.</p></li>
          <li><span>2024</span><p>Named a Millennium Fellow, and began a year as a Software Engineering Intern at Trinity Technologies.</p></li>
          <li><span>January 2025</span><p>Founded Nile Green Packaging in Juba.</p></li>
          <li><span>December 2025</span><p>Won ALU Ventures Lab Demo Day with Nile Green Packaging.</p></li>
          <li><span>June 2026</span><p>Completed the Carbon and ESG Analysis programme with University of Cambridge Online.</p></li>
          <li><span>July 2026</span><p>Defended SuddSight, my flood-risk prediction capstone.</p></li>
        </ol>
      </section>
      <section className={`${s.section} ${s.alt} ${s.split}`}>
        <div className={s.prose}>
          <h2>Leadership, community and life outside work</h2>
          <p>
            Through Nile Green Packaging, I take part in clean-up campaigns from time to time, working in collaboration
            with Save the Nile. For a company built around reducing plastic waste, it keeps us close to where that waste
            actually ends up.
          </p>
        </div>
        <figure className={s.figure}>
          <Image src="/images/cleanup-team.jpg" alt="Daniel in a high-visibility vest holding a paper bag beside volunteers and filled refuse sacks, with a news camera filming" width={1080} height={810} sizes="(max-width: 800px) 100vw, 50vw" />
          <figcaption>On a clean-up campaign with Save the Nile.</figcaption>
        </figure>
      </section>
      <section className={`${s.section} ${s.split}`} id="credentials">
        <div className={s.prose}>
          <h2>Education, awards and certifications</h2>
          <p>English and Arabic are my working languages, and Dinka is my first language.</p>
        </div>
        <div className={s.photo} style={{ maxWidth: 380 }}>
          <Image src="/images/alu-portrait.jpg" alt="Daniel in a dark suit holding a document folder at African Leadership University" width={850} height={1279} sizes="380px" />
        </div>
      </section>
      <section className={`${s.section} ${s.first}`}>
        <div className={s.credentials}>
          <div>
            <h3>Education</h3>
            <dl>
              <dt>Bachelor’s degree, Computer Software Engineering</dt>
              <dd>African Leadership University, 2023–2026</dd>
            </dl>
          </div>
          <div>
            <h3>Awards and honours</h3>
            <dl>
              <dt>Winner, ALU Ventures Lab Demo Day</dt>
              <dd>December 2025, with Nile Green Packaging. US$30,000 prize.</dd>
              <dt>Mastercard Foundation Scholar</dt>
              <dd>African Leadership University</dd>
              <dt>Millennium Fellow</dt>
              <dd>Class of 2024</dd>
            </dl>
          </div>
          <div>
            <h3>Certifications</h3>
            <dl>
              <dt>Carbon and ESG Analysis</dt>
              <dd>University of Cambridge Online, 2026</dd>
              <dt>Executive Diploma in Business Management and Administration</dt>
              <dd>UCT</dd>
              <dt>Professional Diploma in Public Relations and PR Management</dt>
              <dd>UCT</dd>
              <dt>Design-Led Strategy</dt>
              <dd>University of Sydney Business School</dd>
              <dt>Global Financial Markets and Instruments</dt>
              <dd>Rice University</dd>
              <dt>Neural Networks and Deep Learning</dt>
              <dd>DeepLearning.AI</dd>
              <dt>Applied Unsupervised Learning in Python</dt>
              <dd>University of Michigan</dd>
              <dt>100 Days of Code: Python Pro Bootcamp</dt>
              <dd>Completed</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
