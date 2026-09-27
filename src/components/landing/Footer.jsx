import { ArrowUpRight } from 'lucide-react'
import { managerUrl } from '../../content/landing'
import { catalog } from '../../content/site'

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main"><a className="brand footer-brand" href="/"><img src="/assets/logo.svg" alt="" width="39" height="25" /><span>Student <strong>Helper</strong></span></a><p>Помогаем разобраться<br />с учебными задачами с 2020 года.</p><a className="text-action" href={managerUrl} target="_blank" rel="noreferrer">На связи в Telegram <ArrowUpRight size={17} /></a></div>
    <div className="footer-directory"><nav aria-label="Все услуги"><strong>С чем помогаем</strong>{catalog.map(service => <a href={service.path} key={service.path}>{service.label}</a>)}</nav><nav aria-label="О сервисе"><strong>Как всё устроено</strong><a href="/prices/">Стоимость</a><a href="/guarantees/">Гарантии и поддержка</a><a href="/examples/">Примеры работ</a><a href="/guides/">Полезные материалы</a><a href="/faq/">Вопросы и ответы</a><a href="/#process">Как мы работаем</a><a href="/#reviews">Отзывы</a></nav><nav aria-label="Правовые документы"><strong>Документы</strong><a href="/privacy/">Политика обработки данных</a><a href="/consent/">Согласие на обработку данных</a><a href="/offer/">Публичная оферта</a><a href="/requisites/">Реквизиты</a><a href="/#contacts">Связаться с нами</a></nav></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Student Helper</span><a href="mailto:studenthelper.assist@gmail.com">studenthelper.assist@gmail.com</a><span>ИП Авилов Матвей Петрович</span></div>
    <p className="footer-note">Помогаем готовить учебные материалы и разбираться с требованиями к работам. Решение о том, как использовать материалы, остаётся за вами.</p>
  </footer>
}
