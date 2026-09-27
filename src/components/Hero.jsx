import { ArrowRight, Check } from 'lucide-react'
import { benefits } from '../content/home'
import HeroArtwork from './HeroArtwork'

export default function Hero({ onOrder }) {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <div className="eyebrow"><span />БЕСПЛАТНАЯ ОЦЕНКА ЗАДАНИЯ</div>
      <h1 id="hero-title">Профессиональная<br />помощь <span>студентам</span></h1>
      <p className="hero-description">Отправьте задание и требования преподавателя — мы быстро оценим работу и заранее сообщим срок и стоимость.</p>
      <ul className="benefits">{benefits.map(text => <li key={text}><span className="check-icon"><Check size={17} strokeWidth={2.5} /></span><span>{text}</span></li>)}</ul>
      <div className="hero-actions">
        <button className="button button-dark hero-order" aria-haspopup="dialog" onClick={onOrder}>Заказать работу <ArrowRight size={19} /></button>
        <a className="learn-more" href="#statistics">Узнать больше <span><ArrowRight size={14} /></span></a>
      </div>
    </div>
    <HeroArtwork />
  </section>
}
