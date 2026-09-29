import { siteUrl } from '../../lib/siteUrl.js'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { legalDocuments } from '../../content/site'

export default function ReadingNavigation({ article, legal }) {
  const [open, setOpen] = useState(false)
  return <div className={`reading-navigation${open ? ' is-open' : ''}`}>
    <button className="reading-navigation-toggle" aria-expanded={open} aria-controls="reading-links" onClick={() => setOpen(value => !value)}>{legal ? 'Навигация по документу' : 'Содержание статьи'}<ChevronDown size={18} /></button>
    <div id="reading-links">
      <nav aria-label="Оглавление"><span className="support-eyebrow">НА ЭТОЙ СТРАНИЦЕ</span>{article.headings.map(heading => <a href={siteUrl(`#${heading.id}`)} key={heading.id}>{heading.title}</a>)}</nav>
      {legal && <nav className="legal-nav" aria-label="Другие документы"><span className="support-eyebrow">ДОКУМЕНТЫ</span>{legalDocuments.map(item => <a href={siteUrl(item.path)} key={item.path} aria-current={item.path === article.path ? 'page' : undefined}>{item.title}</a>)}</nav>}
    </div>
  </div>
}
