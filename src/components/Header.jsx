import { siteUrl } from '../lib/siteUrl.js'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigation } from '../content/home'
import { managerUrl } from '../content/landing'

export default function Header({ onOrder, path = '/' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const header = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12)
    const frame = requestAnimationFrame(updateScrolled)
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', updateScrolled) }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOutside = event => { if (!header.current.contains(event.target)) setMenuOpen(false) }
    const closeEscape = event => {
      if (event.key === 'Escape') { setMenuOpen(false); toggle.current.focus() }
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeEscape)
    }
  }, [menuOpen])

  const order = () => { if (menuOpen) toggle.current.focus(); setMenuOpen(false); onOrder() }
  return <header ref={header} className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false) }}>
    <a className="brand" href={siteUrl(path === '/' ? '#top' : '/')} aria-label="Student Helper — главная">
      <img src={siteUrl("/assets/logo.svg")} alt="" width="49" height="32" />
      <span>Student <strong>Helper</strong></span>
    </a>
    <button ref={toggle} className="menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основная навигация" id="main-nav">
      {navigation.map(item => <a key={item.href} className="nav-item" href={siteUrl(item.href)} aria-current={path.startsWith(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
      <div className="nav-mobile-actions"><button className="button button-dark" aria-haspopup="dialog" onClick={order}>Заказать работу <ArrowUpRight size={18} /></button><a className="text-action" href={siteUrl(managerUrl)} target="_blank" rel="noreferrer">Написать в Telegram <ArrowUpRight size={16} /></a></div>
    </nav>
    <button className="button button-dark header-order" aria-haspopup="dialog" onClick={() => { setMenuOpen(false); onOrder() }}>Заказать работу</button>
  </header>
}
