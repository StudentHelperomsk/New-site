import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { siteUrl } from '../../lib/siteUrl'
import useSnapCarousel from '../../hooks/useSnapCarousel'
import { supportStory } from '../../content/support'
import SupportArtwork from './SupportArtwork'
import '../../styles/support.css'

export default function ProcessSection({ onOrder }) {
  const [active, setActive] = useState(0)
  const section = useRef(null)
  const chapters = useRef([])
  const { track: carouselRef, onScroll, onKeyDown, goTo } = useSnapCarousel(setActive)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px) and (min-height: 650px)')
    let frame = 0
    const update = () => {
      frame = 0
      if (!desktop.matches) return
      const bounds = section.current.getBoundingClientRect()
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return
      const target = window.innerHeight * .55
      const distances = chapters.current.map(element => {
        const rect = element.getBoundingClientRect()
        return Math.abs(rect.top + rect.height / 2 - target)
      })
      setActive(distances.indexOf(Math.min(...distances)))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  const chooseChapter = index => {
    if (goTo(index)) return
    setActive(index)
    if (window.matchMedia('(min-width: 901px) and (min-height: 650px)').matches) {
      chapters.current[index].scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    }
  }

  return <section className="support-story" id="process" ref={section} aria-labelledby="process-title">
    <div className="support-heading"><span className="support-eyebrow" data-reveal="copy">КАК МЫ РАБОТАЕМ</span><h2 id="process-title"><span className="support-title-line" data-reveal="line">От оценки задания</span><span className="support-title-line" data-reveal="line"><em>до полной сдачи</em></span></h2><p data-reveal="copy">Менеджер на связи на каждом этапе.<br />{' '}Статус работы — в боте сообщества.</p></div>
    <div className="support-layout">
      <div className="support-visual">
        <div className="support-visual-entrance" data-reveal="scene">
          <div className="support-scene-label"><span>STUDENT HELPER / ПОРЯДОК РАБОТЫ</span><span aria-hidden="true">0{active + 1} — 03</span></div>
          <SupportArtwork active={active} scenes={supportStory} />
          <div className="support-switcher" aria-label="Этапы работы">
            {supportStory.map((scene, index) => <button key={scene.id} type="button" aria-pressed={active === index} aria-controls={`chapter-${scene.id}`} onClick={() => chooseChapter(index)}><span>0{index + 1}</span>{scene.label}</button>)}
          </div>
        </div>
      </div>
      <div className="support-chapters" ref={carouselRef} onScroll={onScroll} onKeyDown={onKeyDown} tabIndex={0} role="region" aria-label="Этапы работы — листайте карточки">
        {supportStory.map((scene, index) => <article className={`support-chapter${active === index ? ' is-active' : ''}`} id={`chapter-${scene.id}`} ref={element => { chapters.current[index] = element }} key={scene.id}>
          <img className="mobile-chapter-art" src={siteUrl(scene.artwork)} alt="" width="600" height="500" loading="lazy" />
          <div className="support-chapter-copy" data-reveal="copy">
            <span className="support-chapter-number">0{index + 1} <span>{scene.label}</span></span>
            <h3>{scene.title}</h3>{scene.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{scene.note && <div className="support-chapter-note"><Check size={17} aria-hidden="true" /><strong>{scene.note}</strong></div>}
            {index === 2 && <button type="button" className="text-action" onClick={() => onOrder()}>Оценить задание <ArrowRight size={18} /></button>}
          </div>
        </article>)}
      </div>
    </div>
    <div className="support-guarantee" id="guarantees" data-reveal="copy"><span>Входит в стоимость</span><p>Доработки по исходному заданию.<br /><strong>Бесплатно до полной сдачи.</strong></p><span className="support-guarantee-mark" aria-hidden="true"><Check size={38} strokeWidth={2.4} /></span></div>
  </section>
}
