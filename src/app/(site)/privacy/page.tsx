import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How DMR — The Solution handles the information you send through this website.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Privacy policy" intro="Last updated 9 November 2026." />
      <section className={`${s.section} ${s.first}`}>
        <div className={s.block}>
          <h2>Who is responsible</h2>
          <p>This website is operated by Daniel Marial Reng Kudum under the name DMR — The Solution.</p>
        </div>
        <div className={s.block}>
          <h2>What is collected</h2>
          <p>
            When you send an enquiry, I receive your name, email address, country, any organisation you give, your
            message and your preferred timeline. A scrambled code derived from your connection is stored for a limited
            spam check. It does not record your actual internet address.
          </p>
        </div>
        <div className={s.block}>
          <h2>How it is used</h2>
          <p>Your details are used only to respond to your enquiry and manage any resulting work. They are not sold.</p>
        </div>
        <div className={s.block}>
          <h2>Where it is kept</h2>
          <p>
            Enquiries are stored in a private database, accessible only through a password-protected dashboard. The
            website relies on third-party hosting, database and email providers to operate.
          </p>
        </div>
        <div className={s.block}>
          <h2>Your choices</h2>
          <p>
            You can ask to see, correct or delete the information you sent. Contact me through the enquiry form or
            WhatsApp and I will deal with your request.
          </p>
        </div>
      </section>
    </>
  )
}
