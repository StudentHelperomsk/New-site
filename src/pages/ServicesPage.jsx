import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { catalog, formatPrice } from '../content/site'
import { Breadcrumbs, DocumentArt, PageCTA, PageIntro } from '../components/pages/PageParts'

export default function ServicesPage({ onOrder }) {
  return <><Breadcrumbs items={[{ label: 'Услуги' }]} /><div className="page-hero-split"><PageIntro eyebrow="УСЛУГИ" title={<>Помощь с<br /><em>учебными работами</em></>} description="Отправьте задание и требования преподавателя — мы быстро оценим работу и заранее сообщим срок и стоимость."><div className="page-inline-facts"><span><strong>08</strong> видов работ</span><a href="/prices/">Стоимость работ <ArrowUpRight size={16} /></a></div></PageIntro><DocumentArt /></div>
    <section className="catalog-list" aria-label="Все направления помощи">{catalog.map((service, index) => <a className="catalog-row" href={service.path} key={service.slug}><span className="catalog-number">0{index + 1}</span><img src={`/assets/services/${service.icon}.svg`} alt="" width="62" height="62" /><div><h2>{service.label}</h2><p>{service.lead}</p></div><span className="catalog-price">от {formatPrice(service.price)} ₽</span><span className="round-link"><ArrowUpRight size={20} /></span></a>)}</section>
    <div className="page-note"><span>Нужно комплексное задание?</span><p>Курсовая может включать расчёты, чертежи и презентацию. Оценим все части вместе и заранее сообщим итоговую стоимость.</p><button className="text-action" type="button" onClick={() => onOrder()}>Оценить задание <ArrowRight size={17} /></button></div><PageCTA onOrder={onOrder} /></>
}
