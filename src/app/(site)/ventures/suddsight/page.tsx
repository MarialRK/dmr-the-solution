import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Placeholder } from '@/components/Placeholder'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'SuddSight case study',
  description: 'How SuddSight estimates flood risk in South Sudan’s Sudd Wetland and explains each result.',
}

const models = [
  { name: 'LSTM', accuracy: '88.0', recall: '92.0', f1: '65.4', auc: '95.8' },
  { name: 'GRU', accuracy: '88.0', recall: '88.0', f1: '64.9', auc: '95.5' },
  { name: 'XGBoost (used in the live system)', accuracy: '86.1', recall: '38.0', f1: '37.7', auc: '83.3' },
  { name: 'ARIMA baseline', accuracy: '82.4', recall: '33.3', f1: '40.0', auc: '85.7' },
  { name: 'Random Forest', accuracy: '79.6', recall: '55.0', f1: '39.5', auc: '83.0' },
  { name: 'SVM', accuracy: '71.3', recall: '83.0', f1: '38.6', auc: '82.9' },
]

export default function SuddSightPage() {
  return (
    <>
      <PageIntro
        title="SuddSight"
        intro="A flood-risk prediction system for South Sudan’s Sudd Wetland that shows why it reached each result."
      />
      <section className={`${s.section} ${s.first} ${s.split}`}>
        <div>
          <p className={s.status}>Deployed research prototype</p>
          <p className={s.status}>Software engineering capstone, African Leadership University, 2026</p>
        </div>
        <div className={s.prose}>
          <h2>The problem</h2>
          <p>
            Flooding returns to the Sudd again and again, and information about it often arrives days after decisions
            need to be made. I wanted to test whether public satellite data could give an earlier signal at county
            level, in a form people could question instead of simply trusting.
          </p>
          <h2>What I built</h2>
          <p>
            SuddSight combines rainfall, vegetation, elevation and historical flood records for ten counties in
            Jonglei, Unity and Upper Nile, covering January 2023 to December 2024. It compares six models, then serves
            risk estimates and their explanations through a public dashboard.
          </p>
        </div>
      </section>
      <section className={`${s.section} ${s.alt}`}>
        <h2>Results across six models</h2>
        <div className={s.tableWrap} tabIndex={0} role="region" aria-label="Model results table">
          <table className={s.table}>
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Accuracy %</th>
                <th scope="col">Recall %</th>
                <th scope="col">F1 %</th>
                <th scope="col">AUC %</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.name}>
                  <th scope="row">{model.name}</th>
                  <td>{model.accuracy}</td>
                  <td>{model.recall}</td>
                  <td>{model.f1}</td>
                  <td>{model.auc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={s.note}>Stratified five-fold cross-validation on 230 county-month observations.</p>
      </section>
      <section className={`${s.section} ${s.split}`}>
        <div className={s.prose}>
          <h2>The trade-off I made</h2>
          <p>
            The LSTM performed best and caught 22 of the 24 real flood months. The live system uses XGBoost, which caught
            only 9, because it can give exact explanations quickly. I chose explanation over raw detection for this
            version, and I report that cost openly.
          </p>
          <h2>Tested against real events</h2>
          <p>
            For Bor South in September 2024, a month with real flooding, the system estimated a 95.1% risk, with rainfall
            over the previous 60 days as the largest driver. For Baliet in the dry season of February 2023, it correctly
            suppressed the risk.
          </p>
        </div>
        <div className={s.prose}>
          <h2>What it does not do yet</h2>
          <ul className={s.list}>
            <li>It uses historical data, not live satellite feeds.</li>
            <li>It works monthly and by county, not daily or by grid cell.</li>
            <li>It was trained on a small sample with only 24 flood months.</li>
            <li>It has not been tested with responders in the field.</li>
          </ul>
          <h2>Built with</h2>
          <p>Python, XGBoost, SHAP, FastAPI, React and Leaflet. Data from CHIRPS, MODIS, SRTM and OCHA.</p>
        </div>
      </section>
      <section className={`${s.section} ${s.alt}`}>
        <div className={s.singlePlaceholder}>
          <Placeholder label="Dashboard screenshots to be added" />
        </div>
        <div className={s.links}>
          <Link href="/ventures">Back to ventures and projects</Link>
        </div>
      </section>
    </>
  )
}
