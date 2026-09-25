import { useState } from 'react'
import { ArrowUpRight, ArrowRight, HeartHandshake, MessagesSquare, CheckCheck } from 'lucide-react'
import { services } from '../../content/landing'
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
    <SectionHeading id="services-title" eyebrow="ВАША ЗАДАЧА — НАША ЗАБОТА" title={<>С чего начнём<br /><em>именно у вас?</em></>} description="Поможем с отдельным заданием или пройдём весь путь до сдачи." />
    <div className="service-explorer">
      <div className="service-choices">
        <div className="service-list" aria-label="Выберите направление">
          {directions.map((item, index) => <button key={item.index} type="button" className="service-choice" aria-pressed={active === index} aria-controls="service-detail" onClick={() => setActive(index)}>
            <span className="service-number">0{index + 1}</span><span>{services[item.index].title}</span><ArrowUpRight size={23} aria-hidden="true" />
          </button>)}
        </div>
        <button type="button" className="service-help" onClick={() => onSelect()}><MessagesSquare size={21} aria-hidden="true" /><span>Не знаете, с чего начать?<br /><strong>Разберёмся вместе.</strong></span><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <div className="service-stage" id="service-detail" aria-live="polite">
        <div className="service-stage-top"><span>{direction.caption}</span><span>0{active + 1} / 04</span></div>
        <div className="service-art" key={service.icon}>
          <span className="service-orbit" aria-hidden="true" /><span className="service-sheet-back" aria-hidden="true" />
          <div className="service-sheet"><span>STUDENT HELPER</span><img src={`/assets/${direction.artwork}.svg`} alt="" width="150" height="150" /><strong>{service.title}</strong></div>
          <span className="service-art-note"><CheckCheck size={19} aria-hidden="true" />Правки? Мы рядом.</span>
        </div>
        <p className="service-detail-description">{service.description}</p>
        <div className="service-stage-bottom"><span><small>Стоимость работы</small><strong>от {service.price} ₽</strong></span><button type="button" className="button button-dark" onClick={() => onSelect(service.title)}>Обсудить <ArrowUpRight size={19} aria-hidden="true" /></button></div>
      </div>
    </div>
    <div className="service-other"><span>А ещё поможем</span><div>{services.filter((_, index) => !directions.some(item => item.index === index)).map(item => <button type="button" key={item.icon} onClick={() => onSelect(item.title)}>{item.title}<ArrowUpRight size={14} aria-hidden="true" /></button>)}</div></div>
    <div className="service-promise"><div><HeartHandshake size={28} aria-hidden="true" /><strong>Остаёмся с вами до сдачи</strong></div><p>Разберём замечания преподавателя и внесём правки по исходному заданию — без ограничений по количеству и без доплат.</p></div>
  </section>
}
