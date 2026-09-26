import { ArrowRight, Check } from 'lucide-react'
import { benefits } from '../content/home'
import HeroArtwork from './HeroArtwork'

export default function Hero({ onOrder }) {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <div className="eyebrow"><span />НАДЁЖНАЯ ПОМОЩЬ В УЧЁБЕ</div>
      <h1 id="hero-title">Профессиональная<br />помощь <span>студентам</span></h1>
      <p className="hero-description">Курсовые, дипломные, лабораторные, чертежи, презентации и другие учебные работы — качественно, в срок и по доступным ценам.</p>
      <ul className="benefits">{benefits.map(text => <li key={text}><span className="check-icon"><Check size={17} strokeWidth={2.5} /></span><span>{text}</span></li>)}</ul>
      <div className="hero-actions">
        <button className="button button-dark hero-order" aria-haspopup="dialog" onClick={onOrder}>Заказать работу <ArrowRight size={19} /></button>
        <a className="learn-more" href="#statistics">Узнать больше <span><ArrowRight size={14} /></span></a>
      </div>
    </div>
    <HeroArtwork />
  </section>
}
