import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { guides } from '../content/site'
import { Breadcrumbs, DocumentArt, PageCTA, PageIntro } from '../components/pages/PageParts'

export default function GuidesPage({ onOrder }) {
  const featured = guides.find(guide => guide.slug === 'chto-otpravit-dlya-rascheta')
  return <><Breadcrumbs items={[{ label: 'Полезные материалы' }]} /><PageIntro eyebrow="СПОКОЙНЕЕ, КОГДА ПОНЯТНО" title={<>Немного ясности<br /><em>перед началом.</em></>} description="Что отправить менеджеру, как договориться о сроке и что делать с замечаниями. Короткие памятки для обычных учебных ситуаций." />
    <a className="guide-feature" href={featured.path}><div><span className="support-eyebrow">НАЧНИТЕ ЗДЕСЬ</span><h2>{featured.title}</h2><p>{featured.lead}</p><span className="guide-feature-link">Открыть памятку <ArrowRight size={19} /></span></div><DocumentArt icon="practice-report" label="Задание · требования · срок" /></a>
    <section className="guide-index" aria-label="Все памятки">{guides.filter(guide => guide !== featured).map((guide, index) => <a href={guide.path} key={guide.slug}><span className="catalog-number">0{index + 2}</span><div><h2>{guide.title}</h2><p>{guide.lead}</p><small><Clock size={14} />{guide.minutes} мин на чтение</small></div><ArrowUpRight size={23} /></a>)}</section><PageCTA onOrder={onOrder} /></>
}
