import { siteUrl, siteHtml } from '../lib/siteUrl.js'
import { ArrowUpRight, Check } from 'lucide-react'
import { guarantees } from '../content/site'
import { supportStory } from '../content/support'
import SupportArtwork from '../components/landing/SupportArtwork'
import { Breadcrumbs, PageCTA, PageIntro } from '../components/pages/PageParts'

export default function GuaranteesPage({ onOrder }) {
  return <><Breadcrumbs items={[{ label: 'Гарантии и поддержка' }]} /><div className="page-hero-split"><PageIntro eyebrow="УСЛОВИЯ РАБОТЫ" title={<>Гарантии и<br /><em>бесплатные доработки</em></>} description="До начала работы фиксируем требования, стоимость и срок. После передачи результата исправляем замечания, которые относятся к первоначально согласованному заданию."><div className="guarantee-hero-note"><Check size={20} />Бесплатные доработки по исходному заданию до полной сдачи.</div></PageIntro><div className="guarantee-page-art"><SupportArtwork active={2} scenes={supportStory} /></div></div>
    <section className="guarantee-principles" aria-label="Условия работы">{guarantees.map((item, index) => <article key={item.title}><span className="principle-number">0{index + 1}</span><h2>{item.title}</h2><div className="prose" dangerouslySetInnerHTML={{ __html: siteHtml(item.body) }} /></article>)}</section>
    <div className="page-note"><span>Если требования изменились</span><p>Если преподаватель меняет требования, рассматриваем ситуацию индивидуально и по возможности идём навстречу. Полностью новое задание оцениваем отдельно.</p><a href={siteUrl("/guides/kak-prohodyat-dorabotki/")} className="text-action">Как передать замечания <ArrowUpRight size={16} /></a></div><PageCTA onOrder={onOrder} /></>
}
