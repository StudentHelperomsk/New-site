import { useEffect, useRef } from 'react'

export default function HeroArtwork() {
  const artwork = useRef(null)

  useEffect(() => {
    const element = artwork.current
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)')
    let frame = 0
    let visible = false
    const updatePlayback = () => { element.dataset.paused = String(!visible || document.hidden) }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updatePlayback() })
    observer.observe(element)
    document.addEventListener('visibilitychange', updatePlayback)

    const reset = () => {
      cancelAnimationFrame(frame)
      element.style.setProperty('--pointer-x', '0px')
      element.style.setProperty('--pointer-y', '0px')
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
    }
    const move = event => {
      if (!motion.matches) return
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - .5
      const y = (event.clientY - bounds.top) / bounds.height - .5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        element.style.setProperty('--pointer-x', `${x * 16}px`)
        element.style.setProperty('--pointer-y', `${y * 12}px`)
        element.style.setProperty('--tilt-x', `${-y * 5}deg`)
        element.style.setProperty('--tilt-y', `${x * 5}deg`)
      })
    }
    element.addEventListener('pointermove', move)
    element.addEventListener('pointerleave', reset)
    motion.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', updatePlayback)
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', reset)
      motion.removeEventListener('change', reset)
    }
  }, [])

  return <div className="hero-artwork" ref={artwork} aria-hidden="true" data-paused="true">
    <div className="art-glow" />
    <div className="art-scene">
      <div className="art-inner" />
      <div className="art-orbit"><span /></div>
      <div className="art-main"><img src="/assets/coursework.svg" alt="" width="330" height="330" /></div>
      <div className="art-bubble bubble-analytics"><img src="/assets/analytics.svg" alt="" width="90" height="90" /></div>
      <div className="art-bubble bubble-flask"><img src="/assets/flask.svg" alt="" width="90" height="90" /></div>
      <div className="art-bubble bubble-diploma"><img src="/assets/diploma.svg" alt="" width="90" height="90" /></div>
      <div className="art-bubble bubble-presentation"><img src="/assets/presentation.svg" alt="" width="90" height="90" /></div>
      <span className="spark spark-one">+</span><span className="spark spark-two">+</span>
      <span className="ring ring-one" /><span className="ring ring-two" />
    </div>
  </div>
}
