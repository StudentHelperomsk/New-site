import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigation } from '../content/home'

export default function Header({ onOrder }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Student Helper — главная">
      <img src="/assets/logo.svg" alt="" width="49" height="32" />
      <span>Student <strong>Helper</strong></span>
    </a>
    <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основная навигация" id="main-nav">
      {navigation.map(item => <span key={item} className="nav-item" aria-disabled="true" title="Раздел появится на следующем этапе">{item}</span>)}
    </nav>
    <button className="button button-dark header-order" onClick={onOrder}>Заказать работу</button>
    <button className="menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>
}
