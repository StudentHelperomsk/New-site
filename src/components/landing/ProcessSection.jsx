import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { supportStory } from '../../content/support'
import SupportArtwork from './SupportArtwork'
import '../../styles/support.css'

export default function ProcessSection({ onOrder }) {
  const [active, setActive] = useState(0)
  const section = useRef(null)
  const chapters = useRef([])

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
    setActive(index)
    if (window.matchMedia('(min-width: 901px) and (min-height: 650px)').matches) {
      chapters.current[index].scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    }
  }

  return <section className="support-story" id="process" ref={section} aria-labelledby="process-title">
    <div className="support-heading"><span className="support-eyebrow" data-reveal="copy">НА ВАШЕЙ СТОРОНЕ</span><h2 id="process-title"><span className="support-title-line" data-reveal="line">С задачей можно</span><span className="support-title-line" data-reveal="line">не оставаться <em>один на один.</em></span></h2><p data-reveal="copy">Внимание к работе.<br />И к человеку за ней.</p></div>
    <div className="support-layout">
      <div className="support-visual">
        <div className="support-visual-entrance" data-reveal="scene">
          <div className="support-scene-label"><span>STUDENT HELPER / ПОДДЕРЖКА</span><span aria-hidden="true">0{active + 1} — 03</span></div>
          <SupportArtwork active={active} scenes={supportStory} />
          <div className="support-switcher" aria-label="Этапы сопровождения">
            {supportStory.map((scene, index) => <button key={scene.id} type="button" aria-pressed={active === index} aria-controls={`chapter-${scene.id}`} onClick={() => chooseChapter(index)}><span>0{index + 1}</span>{scene.label}</button>)}
          </div>
        </div>
      </div>
      <div className="support-chapters">
        {supportStory.map((scene, index) => <article className={`support-chapter${active === index ? ' is-active' : ''}`} id={`chapter-${scene.id}`} ref={element => { chapters.current[index] = element }} key={scene.id}>
          <div className="support-chapter-copy" data-reveal="copy">
            <span className="support-chapter-number">0{index + 1} <span>{scene.label}</span></span>
            <h3>{scene.title}</h3><p>{scene.text}</p><div className="support-chapter-note">{index < 2 && <Check size={17} aria-hidden="true" />}<span>{scene.note}</span></div>
            {index === 2 && <button type="button" className="text-action" onClick={() => onOrder()}>Обсудим ваше задание <ArrowRight size={18} /></button>}
          </div>
        </article>)}
      </div>
    </div>
    <div className="support-guarantee" id="guarantees" data-reveal="copy"><span>Наша договорённость</span><p>Работаем над заданием.<br /><strong>Остаёмся рядом до сдачи.</strong></p><span className="support-guarantee-mark" aria-hidden="true"><Check size={38} strokeWidth={2.4} /></span></div>
  </section>
}
