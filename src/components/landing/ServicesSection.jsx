import { useState } from 'react'
import { ArrowUpRight, ArrowRight, MessagesSquare } from 'lucide-react'
import { services } from '../../content/landing'
import { catalog } from '../../content/site'
import SectionHeading from './SectionHeading'

const directions = [
  { index: 0, artwork: 'coursework', caption: 'От плана до последней правки' },
  { index: 7, artwork: 'diploma', caption: 'На каждом этапе подготовки' },
  { index: 1, artwork: 'analytics', caption: 'Внимание к каждой детали' },
  { index: 4, artwork: 'presentation', caption: 'Понятно. Наглядно. По делу.' },
]

export default function ServicesSection({ onSelect }) {
  const [active, setActive] = useState(0)
  const direction = directions[active]
  const service = services[direction.index]
  return <section className="landing-section services-section" id="services" aria-labelledby="services-title">
    <SectionHeading id="services-title" eyebrow="С ЧЕМ ПОМОЖЕМ" title={<>Теперь —<br /><em>к вашей задаче.</em></>} description="От отдельного расчёта до дипломного проекта. Выберите, что сейчас нужно вам."><a className="text-action" href="/services/">Все направления <ArrowUpRight size={16} /></a></SectionHeading>
    <div className="service-explorer">
      <div className="service-choices" data-reveal="copy">
        <div className="service-list" aria-label="Выберите направление">
          {directions.map((item, index) => <button key={item.index} type="button" className="service-choice" aria-pressed={active === index} aria-controls="service-detail" onClick={() => setActive(index)}>
            <span className="service-number">0{index + 1}</span><span>{services[item.index].title}</span><ArrowUpRight size={23} aria-hidden="true" />
          </button>)}
        </div>
        <button type="button" className="service-help" onClick={() => onSelect()}><MessagesSquare size={21} aria-hidden="true" /><span>Не знаете, с чего начать?<br /><strong>Разберёмся вместе.</strong></span><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <div className="service-stage" id="service-detail" aria-live="polite" data-reveal="scene">
        <div className="service-stage-top"><span>{direction.caption}</span><span>0{active + 1} / 04</span></div>
        <div className="service-detail-content" key={service.icon}>
          <img className="service-detail-mark" src={`/assets/${direction.artwork}.svg`} alt="" width="76" height="76" />
          <h3>{service.title}</h3>
          <p className="service-detail-description">{service.description}</p>
          <a className="service-details-link" href={catalog[direction.index].path}>Подробнее об услуге <ArrowUpRight size={15} /></a>
        </div>
        <div className="service-stage-bottom"><span><small>Стоимость работы</small><strong>от {service.price} ₽</strong></span><button type="button" className="button button-dark" onClick={() => onSelect(service.title)}>Обсудить <ArrowUpRight size={19} aria-hidden="true" /></button></div>
      </div>
    </div>
    <div className="service-other"><span>А ещё поможем</span><div>{services.filter((_, index) => !directions.some(item => item.index === index)).map(item => <button type="button" key={item.icon} onClick={() => onSelect(item.title)}>{item.title}<ArrowUpRight size={14} aria-hidden="true" /></button>)}</div></div>
  </section>
}
