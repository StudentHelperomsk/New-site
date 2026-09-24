import { ArrowUpRight } from 'lucide-react'
import { managerUrl } from '../../content/landing'

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main"><a className="brand footer-brand" href="#top"><img src="/assets/logo.svg" alt="" width="39" height="25" /><span>Student <strong>Helper</strong></span></a><p>Помогаем разобраться<br />с учебными задачами с 2020 года.</p><a className="text-action" href={managerUrl} target="_blank" rel="noreferrer">На связи в Telegram <ArrowUpRight size={17} /></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Student Helper</span><nav aria-label="Правовые документы"><a href="https://studenthelper.ru/privacy/" target="_blank" rel="noreferrer">Политика обработки данных</a><a href="https://studenthelper.ru/offer/" target="_blank" rel="noreferrer">Оферта</a><a href="https://studenthelper.ru/requisites/" target="_blank" rel="noreferrer">Реквизиты</a></nav></div>
    <p className="footer-note">Помогаем готовить учебные материалы и разбираться с требованиями к работам. Решение о том, как использовать материалы, остаётся за вами.</p>
  </footer>
}
