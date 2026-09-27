import { useEffect } from 'react'

// Only the decorative layer follows scrolling. The readable reviews never move.
export default function useReviewParallax(root) {
  useEffect(() => {
    const element = root.current
    if (!element || !('IntersectionObserver' in window)) return

    const motion = window.matchMedia('(min-width: 981px) and (prefers-reduced-motion: no-preference)')
    let visible = false
    let frame = 0

    const paint = () => {
      frame = 0
      if (!motion.matches || !visible || document.hidden) return
      const bounds = element.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)))
      element.style.setProperty('--review-scroll', (progress - .5).toFixed(4))
    }
    const schedule = () => {
      if (!frame && visible && motion.matches && !document.hidden) frame = requestAnimationFrame(paint)
    }
    const reset = () => {
      cancelAnimationFrame(frame)
      frame = 0
      element.style.removeProperty('--review-scroll')
      schedule()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) schedule()
      else { cancelAnimationFrame(frame); frame = 0 }
    }, { rootMargin: '80px' })

    observer.observe(element)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    document.addEventListener('visibilitychange', reset)
    motion.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', reset)
      motion.removeEventListener('change', reset)
      element.style.removeProperty('--review-scroll')
    }
  }, [root])
}
