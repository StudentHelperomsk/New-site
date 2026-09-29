import { siteUrl } from '../../lib/siteUrl.js'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowRight, MessagesSquare } from 'lucide-react'
import { services } from '../../content/landing'
import { catalog } from '../../content/site'
import useSnapCarousel from '../../hooks/useSnapCarousel'
import SectionHeading from './SectionHeading'

const directions = [
  { index: 0, shortLabel: 'Курсовые', artwork: '/assets/coursework.svg', caption: 'Теоретическая и расчётная части' },
  { index: 7, shortLabel: 'Диплом', artwork: '/assets/diploma.svg', caption: 'Разделы, оформление и нормоконтроль' },
  { index: 1, shortLabel: 'Чертежи', artwork: '/assets/services/drawing.svg', caption: 'Чертежи, схемы и 3D-модели' },
  { index: 4, shortLabel: 'Презентации', artwork: '/assets/presentation.svg', caption: 'Структура, тезисы и слайды' },
  { index: 2, shortLabel: 'Расчётные', artwork: '/assets/services/calculation.svg', caption: 'Задачи, формулы и расчёты' },
  { index: 3, shortLabel: 'Лабораторные', artwork: '/assets/flask.svg', caption: 'Расчёты, графики и отчёт' },
  { index: 5, shortLabel: 'Рефераты и эссе', artwork: '/assets/services/pen.svg', caption: 'Текст, источники и оформление' },
  { index: 6, shortLabel: 'Практика', artwork: '/assets/services/practice-report.svg', caption: 'Отчёт и дневник практики' },
]

export default function ServicesSection({ onSelect }) {
  const [active, setActive] = useState(0)
  const { track: carouselRef, onScroll, onKeyDown, goTo } = useSnapCarousel(setActive)
  const choices = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(max-width: 600px)').matches) return
    const list = choices.current
    const item = list.children[active]
    const left = item.getBoundingClientRect().left - list.getBoundingClientRect().left + list.scrollLeft
    list.scrollTo({ left: left - (list.clientWidth - item.clientWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }, [active])
  const choose = index => { if (!goTo(index)) setActive(index) }
  return <section className="landing-section services-section" id="services" aria-labelledby="services-title">
    <SectionHeading id="services-title" eyebrow="УСЛУГИ И ЦЕНЫ" title={<>С чем мы<br /><em>можем помочь</em></>} description="Основные виды работ и начальные цены. Комплексные и нестандартные задания оцениваем отдельно."><a className="text-action" href={siteUrl('/services/')}>Все услуги <ArrowUpRight size={16} /></a></SectionHeading>
    <div className="service-explorer">
      <div className="service-choices" data-reveal="copy">
        <div className="service-list" ref={choices} aria-label="Выберите направление">
          {directions.map((item, index) => <button key={item.index} type="button" className="service-choice" aria-pressed={active === index} aria-controls={`service-card-${item.index}`} onClick={() => choose(index)}>
            <span className="service-number">0{index + 1}</span><span className="service-label-full">{services[item.index].title}</span><span className="service-label-short">{item.shortLabel}</span><ArrowUpRight size={23} aria-hidden="true" />
          </button>)}
        </div>
        <button type="button" className="service-help" onClick={() => onSelect()}><MessagesSquare size={21} aria-hidden="true" /><span>Нужно несколько видов работ?<br /><strong>Оценим все части вместе.</strong></span><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <div className="service-cards" ref={carouselRef} onScroll={onScroll} onKeyDown={onKeyDown} tabIndex={0} role="region" aria-label="Виды работ — листайте карточки">
        {directions.map((direction, index) => {
          const service = services[direction.index]
          return <article className={`service-stage${active === index ? ' is-active' : ''}`} id={`service-card-${direction.index}`} key={direction.index}>
            <div className="service-stage-top"><span>{direction.caption}</span><span>0{index + 1} / 0{directions.length}</span></div>
            <div className="service-detail-content">
              <img className="service-detail-mark" src={siteUrl(direction.artwork)} alt="" width="76" height="76" />
              <h3>{service.title}</h3><p className="service-detail-description">{service.description}</p>
              <a className="service-details-link" href={siteUrl(catalog[direction.index].path)}>Подробнее об услуге <ArrowUpRight size={15} /></a>
            </div>
            <div className="service-stage-bottom"><span><small>Стоимость работы</small><strong>от {service.price} ₽</strong></span><button type="button" className="button button-dark" onClick={() => onSelect(service.title)}>Оценить <ArrowUpRight size={19} aria-hidden="true" /></button></div>
          </article>
        })}
      </div>
    </div>
  </section>
}
