import Image from 'next/image'
import type { Sample } from '@/content/samples'
import s from './Inner.module.css'

export function Gallery({ items, columns = 2 }: { items: Sample[]; columns?: 2 | 4 }) {
  return (
    <div className={`${s.visuals} ${columns === 4 ? s.visualsFour : ''}`}>
      {items.map((item) => (
        <figure key={item.src}>
          <Image className={s.page} src={item.src} alt={item.alt} width={item.width} height={item.height} sizes={columns === 4 ? '(max-width: 800px) 50vw, 22vw' : '(max-width: 800px) 100vw, 30vw'} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
