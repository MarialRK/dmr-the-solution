import Image from 'next/image'
import { formatDate, getAppearances, isSafeLink } from '@/lib/cms'
import s from './Inner.module.css'

/** Interviews, speaking and recognition, plus anything added under Media items in the dashboard. */
export async function MediaList() {
  const appearances = await getAppearances()
  return (
    <>
        {appearances.map((item) => {
          const image = typeof item.image === 'object' ? item.image : null
          return (
            <article className={s.entry} key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p className={s.status}>
                  {item.kind}, {formatDate(item.date)}
                </p>
              </div>
              <div>
                {image?.url ? <Image className={s.entryImage} src={image.url} alt={image.alt} width={image.width ?? 900} height={image.height ?? 600} sizes="(max-width: 800px) 100vw, 45vw" /> : null}
                <p>{item.description}</p>
                {isSafeLink(item.link) ? (
                  <p>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                      Read the source
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          )
        })}
        <article className={s.entry}>
          <div>
            <h3>ALU Ventures Lab Demo Day</h3>
            <p className={s.status}>Recognition, December 2025</p>
          </div>
          <div>
            <Image className={s.entryImage} src="/images/demo-day-prize.jpg" alt="Daniel on stage holding a US$30,000 prize cheque made out to Nile Green Packaging" width={1280} height={960} sizes="(max-width: 800px) 100vw, 45vw" />
            <p>Nile Green Packaging was named winner at the African Leadership University Center for Entrepreneurial Leadership’s Ventures Lab Demo Day, with a US$30,000 prize.</p>
          </div>
        </article>
        <article className={s.entry}>
          <div>
            <h3>Interviewed by African Leadership University</h3>
            <p className={s.status}>Interview, 2026</p>
          </div>
          <div>
            <Image className={s.entryImage} src="/images/alu-interview.jpg" alt="Daniel being interviewed outdoors, captioned Daniel Marial Reng Kudum, Founder, Nile Green Packaging Ltd" width={1330} height={729} sizes="(max-width: 800px) 100vw, 45vw" />
            <p>
              After I completed the ALU Ventures Lab programme, African Leadership University interviewed me about Nile
              Green Packaging and its work against plastic pollution in South Sudan.
            </p>
            <p>
              <a href="https://www.facebook.com/share/v/1C9ypfz3s2/" rel="noopener noreferrer" target="_blank">
                Watch the interview on Facebook
              </a>
            </p>
          </div>
        </article>
        <article className={s.entry}>
          <div>
            <h3>Pitching Nile Green Packaging</h3>
            <p className={s.status}>Speaking, ALU Ventures Lab Demo Day, December 2025</p>
          </div>
          <div>
            <Image className={`${s.entryImage} ${s.portraitImage}`} src="/images/demo-day-pitch.jpg" alt="Daniel presenting a slide titled Solution, covering structured waste collection and recycling programmes" width={994} height={1280} sizes="(max-width: 800px) 100vw, 30vw" />
            <p>Pitching the Nile Green Packaging model, from paper packaging to structured waste collection and recycling, at the Demo Day it went on to win.</p>
          </div>
        </article>
        <article className={s.entry}>
          <div>
            <h3>Speaking to the media at a clean-up campaign</h3>
            <p className={s.status}>Event, with Save the Nile</p>
          </div>
          <div>
            <Image className={s.entryImage} src="/images/cleanup-interview.jpg" alt="Daniel in a high-visibility vest, holding a paper bag, speaking to a television camera" width={1080} height={810} sizes="(max-width: 800px) 100vw, 45vw" />
            <p>Speaking on camera during a clean-up campaign joined by Nile Green Packaging.</p>
          </div>
        </article>
        <article className={s.entry}>
          <div>
            <h3>At African Leadership University</h3>
            <p className={s.status}>Event details to be added</p>
          </div>
          <Image className={s.entryImage} src="/images/alu-group.jpg" alt="Daniel holding a document folder with three others at African Leadership University" width={1280} height={850} sizes="(max-width: 800px) 100vw, 45vw" />
        </article>
    </>
  )
}
