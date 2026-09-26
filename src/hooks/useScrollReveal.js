import { useEffect } from 'react'

// Enhance only content below the initial viewport. Already visible content,
// restored scroll positions and anchor destinations remain immediately readable.
export default function useScrollReveal(root) {
  useEffect(() => {
    const container = root.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!container || motion.matches || !('IntersectionObserver' in window)) return

    const elements = [...container.querySelectorAll('[data-reveal]')]
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.remove('reveal-pending')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px 40px 0px', threshold: .01 })

    elements.forEach(element => {
      const bounds = element.getBoundingClientRect()
      if (!bounds.height || bounds.top < window.innerHeight) return
      element.classList.add('reveal-pending')
      observer.observe(element)
    })

    const showAll = () => {
      elements.forEach(element => element.classList.remove('reveal-pending'))
      observer.disconnect()
    }
    const handleMotion = () => { if (motion.matches) showAll() }
    const handleFocus = event => {
      const element = event.target.closest('.reveal-pending')
      if (element) {
        element.classList.remove('reveal-pending')
        observer.unobserve(element)
      }
    }
    motion.addEventListener('change', handleMotion)
    container.addEventListener('focusin', handleFocus)
    return () => {
      showAll()
      motion.removeEventListener('change', handleMotion)
      container.removeEventListener('focusin', handleFocus)
    }
  }, [root])
}
