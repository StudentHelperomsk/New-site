import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../content/home'

export default function Header({ onOrder, path = '/' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12)
    const frame = requestAnimationFrame(updateScrolled)
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', updateScrolled) }
  }, [])

  return <header className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}`}>
    <a className="brand" href={path === '/' ? '#top' : '/'} aria-label="Student Helper — главная">
      <img src="/assets/logo.svg" alt="" width="49" height="32" />
      <span>Student <strong>Helper</strong></span>
    </a>
    <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основная навигация" id="main-nav">
      {navigation.map(item => <a key={item.href} className="nav-item" href={item.href} aria-current={path.startsWith(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
    </nav>
    <button className="button button-dark header-order" aria-haspopup="dialog" onClick={() => { setMenuOpen(false); onOrder() }}>Заказать работу</button>
    <button className="menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>
}
