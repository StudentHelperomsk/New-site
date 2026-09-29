import { useRef } from 'react'

// Native horizontal scrolling keeps touch momentum and vertical page scrolling.
export default function useSnapCarousel(onChange) {
  const track = useRef(null)
  const onScroll = () => {
    const element = track.current
    if (!element || !window.matchMedia('(max-width: 600px)').matches) return
    const left = element.getBoundingClientRect().left
    const distances = [...element.children].map(child => Math.abs(child.getBoundingClientRect().left - left))
    onChange(distances.indexOf(Math.min(...distances)))
  }
  const goTo = index => {
    const element = track.current
    if (!element || !window.matchMedia('(max-width: 600px)').matches) return false
    const child = element.children[index]
    if (!child) return false
    const left = child.getBoundingClientRect().left - element.getBoundingClientRect().left + element.scrollLeft
    element.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    onChange(index)
    return true
  }
  const onKeyDown = event => {
    if (event.target !== event.currentTarget || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return
    const element = track.current
    const index = [...element.children].reduce((best, child, i, children) => Math.abs(child.getBoundingClientRect().left - element.getBoundingClientRect().left) < Math.abs(children[best].getBoundingClientRect().left - element.getBoundingClientRect().left) ? i : best, 0)
    if (goTo(Math.max(0, Math.min(element.children.length - 1, index + (event.key === 'ArrowRight' ? 1 : -1))))) event.preventDefault()
  }
  return { track, onScroll, onKeyDown, goTo }
}
