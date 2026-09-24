import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { services } from '../../content/landing'
import SectionHeading from './SectionHeading'

export default function ServicesSection({ onSelect }) {
  return <section className="landing-section services-section" id="services" aria-labelledby="services-title">
    <SectionHeading id="services-title" eyebrow="НАШИ УСЛУГИ" title={<>Для каждой задачи<br />найдётся решение</>} description="От небольшого расчёта до дипломного проекта. Выберите направление — разберёмся в деталях вместе." />
    <div className="services-grid">
      {services.map(service => <button key={service.icon} type="button" className={`service-card${service.featured ? ' service-card-featured' : ''}`} onClick={() => onSelect(service.title)}>
        <img src={`/assets/services/${service.icon}.svg`} alt="" width="52" height="52" loading="lazy" />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <span className="service-card-bottom"><span className="service-price"><small>от</small> {service.price} <small>₽</small></span><span className="card-arrow"><ArrowUpRight size={18} /></span></span>
      </button>)}
    </div>
    <div className="services-note"><p>Несколько задач или что-то нестандартное? <span>Оценим всё вместе.</span></p><button type="button" onClick={() => onSelect()} className="text-action">Обсудить задание <ArrowRight size={17} /></button></div>
  </section>
}
