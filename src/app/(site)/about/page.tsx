import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { getAboutPage } from '@/lib/cms'
import s from '@/components/Inner.module.css'
import a from './about.module.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Daniel Marial Reng Kudum is a South Sudanese entrepreneur and software engineer, founder of Nile Green Group, and the person behind DMR — The Solution.',
}

const beliefs = [
  {
    title: 'An idea is only worth something once it works.',
    text: 'Plans, concepts and good intentions matter, but the test is whether something real exists at the end: a product, a system, a document someone can act on.',
  },
  {
    title: 'Disciplined work outlasts grand declarations.',
    text: 'Lasting change rarely comes from big announcements. It comes from showing up, doing the next piece properly, and doing it again.',
  },
  {
    title: 'People should understand the solutions made for them.',
    text: 'A tool nobody can question is a tool nobody can trust. I would rather build something slightly simpler that people understand and use.',
  },
  {
    title: 'A good product is not enough on its own.',
    text: 'You also have to build the demand, the trust and sometimes the rules it depends on. That slower work is where most things are really made.',
  },
]

const proof = [
  {
    problem: 'Single-use plastic in Juba’s markets, drains and rivers.',
    answer: 'I founded Nile Green Packaging to replace it with paper, first by importing to order, then by producing our own.',
  },
  {
    problem: 'Floods in the Sudd that arrive with little useful warning.',
    answer: 'I built SuddSight, which estimates flood risk by county and shows why it reached each estimate.',
  },
  {
    problem: 'Good businesses that look smaller than they are.',
    answer: 'I designed the identities for DMR, Nile Green Group, Nile Green Packaging and Nile Vertex Properties.',
  },
]

export default async function AboutPage() {
  const about = await getAboutPage()
  return (
    <>
      <PageIntro title={about.headline || 'Daniel Marial Reng Kudum'} intro="Entrepreneur, software engineer and founder of Nile Green Group." />

      <section className={`${s.section} ${s.first} ${s.split}`}>
        <div className={s.photo}>
          <Image
            src="/images/flags-hall.jpg"
            alt="Daniel standing beside the flag of South Sudan in a hall of national flags"
            width={720}
            height={1280}
            sizes="(max-width: 800px) 100vw, 42vw"
            priority
          />
        </div>
        <div className={s.prose}>
          <h2 className={a.kicker}>The name</h2>
          <p className={a.initials} aria-hidden="true">
            <span>D</span>aniel <span>M</span>arial <span>R</span>eng
          </p>
          {about.paragraphs.length ? (
            about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <>
              <p>
                DMR are the initials of my first three names, Daniel Marial Reng. It is the name I work under, so
                everything that carries it carries my name too.
              </p>
              <p>
                I am South Sudanese. I work across business, technology, design and sustainability, because the
                problems I care about rarely stay inside one discipline. I founded Nile Green Group, a Kigali-based
                holding company whose businesses include Nile Green Packaging in Juba and Nile Vertex Properties in
                Kigali.
              </p>
              <p>English and Arabic are my working languages, and Dinka is my first language.</p>
            </>
          )}
        </div>
      </section>

      <section className={`${s.section} ${s.dark}`}>
        <h2 className={a.sectionTitle}>What I believe</h2>
        <ol className={a.beliefs}>
          {beliefs.map((belief, index) => (
            <li key={belief.title}>
              <span className={a.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{belief.title}</h3>
              <p>{belief.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.section}>
        <div className={s.split}>
          <h2>Why “The Solution”</h2>
          <div className={s.prose}>
            <p>
              Not because I claim to have every answer. I don’t. I chose the name because of how I work: I start with
              a problem that is real and specific, and I stay with it until something exists that addresses it.
            </p>
            <p>
              That is also the promise I make to the people I work with. You bring the problem. We agree, in writing,
              what will solve it. Then I deliver that, and I tell you plainly when something falls outside what I can
              do well.
            </p>
          </div>
        </div>
        <div className={a.proof}>
          {proof.map((item) => (
            <div key={item.problem}>
              <p className={a.label}>The problem</p>
              <p className={a.problem}>{item.problem}</p>
              <p className={a.label}>What I did</p>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${s.section} ${s.alt}`} id="education">
        <div className={s.split}>
          <div>
            <h2>Universities</h2>
            <div className={a.university}>
              <p className={a.label}>Degree</p>
              <h3>African Leadership University</h3>
              <p>Bachelor’s degree in Computer Software Engineering, 2023–2026</p>
              <p className={s.status}>Studied as a Mastercard Foundation Scholar. Capstone: SuddSight.</p>
            </div>
          </div>
          <div className={s.photo}>
            <Image
              src="/images/alu-portrait.jpg"
              alt="Daniel in a dark suit holding a document folder at African Leadership University"
              width={850}
              height={1279}
              sizes="(max-width: 800px) 100vw, 40vw"
            />
          </div>
        </div>
        <div className={s.credentials} style={{ marginTop: 'clamp(48px, 6vw, 90px)' }}>
          <div>
            <h3>Further study with universities</h3>
            <dl>
              <dt>Carbon and ESG Analysis</dt>
              <dd>University of Cambridge Online, 2026</dd>
              <dt>Design-Led Strategy</dt>
              <dd>University of Sydney Business School</dd>
              <dt>Global Financial Markets and Instruments</dt>
              <dd>Rice University</dd>
              <dt>Applied Unsupervised Learning in Python</dt>
              <dd>University of Michigan</dd>
            </dl>
          </div>
          <div>
            <h3>Professional diplomas and certificates</h3>
            <dl>
              <dt>Executive Diploma in Business Management and Administration</dt>
              <dd>UCT</dd>
              <dt>Professional Diploma in Public Relations and PR Management</dt>
              <dd>UCT</dd>
              <dt>Neural Networks and Deep Learning</dt>
              <dd>DeepLearning.AI</dd>
              <dt>100 Days of Code: Python Pro Bootcamp</dt>
              <dd>Completed</dd>
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
        </div>
      </section>

      <section className={`${s.section} ${s.dark}`}>
        <h2>Have a problem worth solving?</h2>
        <div className={s.links}>
          <Link className={`${s.button} ${s.light}`} href="/services">
            See what I offer
          </Link>
        </div>
      </section>
    </>
  )
}
