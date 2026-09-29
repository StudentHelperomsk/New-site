import { siteUrl } from '../../lib/siteUrl.js'
import { useState } from 'react'
import { ArrowUpRight, ArrowRight, MessagesSquare } from 'lucide-react'
import { services } from '../../content/landing'
import { catalog } from '../../content/site'
import SectionHeading from './SectionHeading'

const directions = [
  { index: 0, shortLabel: 'Курсовые', artwork: 'coursework', caption: 'Теоретическая и расчётная части' },
  { index: 7, shortLabel: 'Диплом', artwork: 'diploma', caption: 'Разделы, оформление и нормоконтроль' },
  { index: 1, shortLabel: 'Чертежи', artwork: 'analytics', caption: 'Чертежи, схемы и 3D-модели' },
  { index: 4, shortLabel: 'Презентации', artwork: 'presentation', caption: 'Структура, тезисы и слайды' },
]

export default function ServicesSection({ onSelect }) {
  const [active, setActive] = useState(0)
  const direction = directions[active]
  const service = services[direction.index]
  return <section className="landing-section services-section" id="services" aria-labelledby="services-title">
    <SectionHeading id="services-title" eyebrow="УСЛУГИ И ЦЕНЫ" title={<>С чем мы<br /><em>можем помочь</em></>} description="Основные виды работ и начальные цены. Комплексные и нестандартные задания оцениваем отдельно."><a className="text-action" href={siteUrl("/services/")}>Все услуги <ArrowUpRight size={16} /></a></SectionHeading>
    <div className="service-explorer">
      <div className="service-choices" data-reveal="copy">
        <div className="service-list" aria-label="Выберите направление">
          {directions.map((item, index) => <button key={item.index} type="button" className="service-choice" aria-pressed={active === index} aria-controls="service-detail" onClick={() => setActive(index)}>
            <span className="service-number">0{index + 1}</span><span className="service-label-full">{services[item.index].title}</span><span className="service-label-short">{item.shortLabel}</span><ArrowUpRight size={23} aria-hidden="true" />
          </button>)}
        </div>
        <button type="button" className="service-help" onClick={() => onSelect()}><MessagesSquare size={21} aria-hidden="true" /><span>Нужно несколько видов работ?<br /><strong>Оценим все части вместе.</strong></span><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <div className="service-stage" id="service-detail" aria-live="polite" data-reveal="scene">
        <div className="service-stage-top"><span>{direction.caption}</span><span>0{active + 1} / 04</span></div>
        <div className="service-detail-content" key={service.icon}>
          <img className="service-detail-mark" src={siteUrl(`/assets/${direction.artwork}.svg`)} alt="" width="76" height="76" />
          <h3>{service.title}</h3>
          <p className="service-detail-description">{service.description}</p>
          <a className="service-details-link" href={siteUrl(catalog[direction.index].path)}>Подробнее об услуге <ArrowUpRight size={15} /></a>
        </div>
        <div className="service-stage-bottom"><span><small>Стоимость работы</small><strong>от {service.price} ₽</strong></span><button type="button" className="button button-dark" onClick={() => onSelect(service.title)}>Оценить <ArrowUpRight size={19} aria-hidden="true" /></button></div>
      </div>
    </div>
    <div className="service-other"><span>Другие услуги</span><div>{services.filter((_, index) => !directions.some(item => item.index === index)).map(item => <button type="button" key={item.icon} onClick={() => onSelect(item.title)}>{item.title}<ArrowUpRight size={14} aria-hidden="true" /></button>)}</div></div>
  </section>
}
