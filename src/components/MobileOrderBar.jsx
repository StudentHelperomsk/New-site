import { siteUrl } from '../lib/siteUrl.js'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { managerUrl } from '../content/landing'

// Show the shortcut between existing order controls, never over a dialog or footer.
export default function MobileOrderBar({ onOrder, home }) {
  const [visible, setVisible] = useState(false)
  const bar = useRef(null)
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 600px)')
    const hero = document.querySelector('.hero-actions')
    const controls = [...document.querySelectorAll('.contact-actions, .page-cta-actions, .service-page-order, .site-footer')]
    let frame = 0
    const update = () => {
      frame = 0
      const pastHero = !home || (hero && hero.getBoundingClientRect().bottom < 0)
      const otherControlVisible = controls.some(element => {
        const rect = element.getBoundingClientRect()
        return rect.top < window.innerHeight && rect.bottom > 0
      })
      const nextVisible = mobile.matches && pastHero && !otherControlVisible
      if (nextVisible || !bar.current?.contains(document.activeElement)) setVisible(Boolean(nextVisible))
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
  }, [home])
  return <div className="mobile-order-bar" ref={bar} hidden={!visible}>
    <button type="button" className="button button-dark" onClick={() => onOrder()} aria-haspopup="dialog">Оценить задание <ArrowUpRight size={18} /></button>
    <a href={siteUrl(managerUrl)} target="_blank" rel="noreferrer" aria-label="Написать менеджеру в Telegram"><Send size={21} /></a>
  </div>
}
