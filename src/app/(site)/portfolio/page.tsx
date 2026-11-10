import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/PageIntro'
import { Placeholder } from '@/components/Placeholder'
import { portfolioCategories } from '@/collections/PortfolioItems'
import { getPortfolioItems, isSafeLink } from '@/lib/cms'
import type { PortfolioItem } from '@/payload-types'
import s from '@/components/Inner.module.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Brand identities, publications, software, websites and other work by Daniel Marial Reng Kudum.',
}

const brands = [
  { name: 'DMR The Solution', src: '/logos/dmr-logo-black.svg', w: 3766, h: 1112 },
  { name: 'Nile Green Group', src: '/logos/nile-green-group.jpg', w: 1080, h: 590 },
  { name: 'Nile Green Packaging', src: '/logos/nile-green-packaging.jpg', w: 1024, h: 1024 },
  { name: 'Nile Vertex Properties', src: '/logos/nile-vertex-properties.jpg', w: 906, h: 1080 },
]

function Item({ item }: { item: PortfolioItem }) {
  const image = typeof item.image === 'object' ? item.image : null
  return (
    <article className={s.entry}>
      <div>
        <h3>{item.title}</h3>
        <p className={s.status}>{item.status}</p>
        {image?.url ? <Image className={s.entryImage} src={image.url} alt={image.alt} width={image.width ?? 900} height={image.height ?? 600} sizes="(max-width: 800px) 100vw, 45vw" /> : null}
      </div>
      <dl>
        <dd>{item.description}</dd>
        {item.objective ? (<><dt>Objective</dt><dd>{item.objective}</dd></>) : null}
        {item.contribution ? (<><dt>My contribution</dt><dd>{item.contribution}</dd></>) : null}
        {item.tools ? (<><dt>Tools</dt><dd>{item.tools}</dd></>) : null}
        {isSafeLink(item.link) ? (<dd><a href={item.link} rel="noopener noreferrer" target="_blank">View project</a></dd>) : null}
      </dl>
    </article>
  )
}

const emptyLabels: Record<string, string> = {
  'Social Media and Digital Communication': 'Social media samples to be added',
  'Business Documents': 'Selected, approved examples to be added',
}

export default async function PortfolioPage() {
  const items = await getPortfolioItems()
  const inCategory = (category: string) => items.filter((item) => item.category === category)
  const has = (title: string) => items.some((item) => item.title === title)

  return (
    <>
      <PageIntro title="Work you can look at." intro="Examples are added as they are approved for public view." />
      {portfolioCategories.map((category, index) => (
        <section className={`${s.section} ${index === 0 ? s.first : ''} ${index % 2 ? s.alt : ''}`} key={category}>
          <h2 className={s.heading}>{category}</h2>

          {category === 'Brand Identity' ? (
            <div className={s.logoGrid}>
              {brands.map((brand) => (
                <Image key={brand.name} src={brand.src} alt={`${brand.name} logo`} width={brand.w} height={brand.h} sizes="(max-width: 800px) 45vw, 22vw" />
              ))}
            </div>
          ) : null}

          {category === 'Publications and Catalogues' && !has('Nile Vertex property catalogue') ? (
            <article className={s.entry}>
              <div>
                <h3>Nile Vertex property catalogue</h3>
                <p className={s.status}>Created for Nile Vertex Properties</p>
              </div>
              <Placeholder label="Catalogue pages to be added" />
            </article>
          ) : null}

          {category === 'Software and Data' && !has('SuddSight') ? (
            <article className={s.entry}>
              <div>
                <h3>SuddSight</h3>
                <p className={s.status}>Deployed research prototype</p>
                <p>Flood-risk prediction for South Sudan’s Sudd Wetland. Designed and built as my software engineering capstone.</p>
              </div>
              <Placeholder label="Dashboard screenshots to be added" />
            </article>
          ) : null}

          {category === 'Websites' ? (
            <article className={s.entry}>
              <div>
                <h3>DMR — The Solution</h3>
                <p className={s.status}>Project led by Daniel Marial Reng Kudum</p>
                <p>This website: brand presentation, portfolio, service catalogue, enquiries and a private content dashboard.</p>
              </div>
              <Image className={s.entryImage} src="/images/dmr-site-home.jpg" alt="The DMR — The Solution homepage" width={1440} height={900} sizes="(max-width: 800px) 100vw, 45vw" />
            </article>
          ) : null}

          {category === 'Video and Campaign Content' ? (
            <article className={s.entry}>
              <div>
                <h3>Breast Cancer Awareness Month video</h3>
                <p className={s.status}>Personal video, published on Facebook</p>
                <p>A personal awareness video for World Breast Cancer Awareness Month.</p>
                <dl>
                  <dt>My contribution</dt>
                  <dd>Recorded the video myself, then edited it with AI tools.</dd>
                </dl>
                <p>
                  <a href="https://www.facebook.com/share/v/1RhVwjwmJJ/" rel="noopener noreferrer" target="_blank">
                    Watch on Facebook
                  </a>
                </p>
              </div>
              <Placeholder label="Video still to be added" />
            </article>
          ) : null}

          {inCategory(category).map((item) => (
            <Item item={item} key={item.id} />
          ))}

          {emptyLabels[category] && !inCategory(category).length ? (
            <div className={s.singlePlaceholder}>
              <Placeholder label={emptyLabels[category]} />
            </div>
          ) : null}
        </section>
      ))}
    </>
  )
}
