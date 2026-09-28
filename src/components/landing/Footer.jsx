import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { managerUrl } from '../../content/landing'
import { catalog } from '../../content/site'

function FooterGroup({ id, title, children }) {
  const [open, setOpen] = useState(false)
  return <div className={`footer-group${open ? ' is-open' : ''}`}>
    <button className="footer-group-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen(value => !value)}>{title}<ChevronDown size={18} /></button>
    <nav id={id} aria-label={title}><strong>{title}</strong>{children}</nav>
  </div>
}

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main"><a className="brand footer-brand" href="/"><img src="/assets/logo.svg" alt="" width="39" height="25" /><span>Student <strong>Helper</strong></span></a><p>Помогаем студентам<br />с учебными работами с 2020 года.</p><a className="text-action" href={managerUrl} target="_blank" rel="noreferrer">Написать в Telegram <ArrowUpRight size={17} /></a></div>
    <div className="footer-directory"><FooterGroup id="footer-services" title="Услуги">{catalog.map(service => <a href={service.path} key={service.path}>{service.label}</a>)}</FooterGroup><FooterGroup id="footer-about" title="О сервисе"><a href="/prices/">Стоимость</a><a href="/guarantees/">Гарантии и поддержка</a><a href="/examples/">Примеры работ</a><a href="/guides/">Полезные материалы</a><a href="/faq/">Вопросы и ответы</a><a href="/#process">Как мы работаем</a><a href="/#reviews">Отзывы</a></FooterGroup><FooterGroup id="footer-documents" title="Документы"><a href="/privacy/">Политика обработки данных</a><a href="/consent/">Согласие на обработку данных</a><a href="/offer/">Публичная оферта</a><a href="/requisites/">Реквизиты</a><a href="/#contacts">Связаться с нами</a></FooterGroup></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Student Helper</span><a href="mailto:studenthelper.assist@gmail.com">studenthelper.assist@gmail.com</a><span>ИП Авилов Матвей Петрович</span></div>
    <p className="footer-note">Student Helper помогает готовить учебные материалы и разбираться с требованиями к работам. Решение о том, как использовать полученные материалы, студент принимает самостоятельно.</p>
  </footer>
}
