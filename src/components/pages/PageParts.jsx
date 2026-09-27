import { ArrowRight, ArrowUpRight, Check, ChevronRight, Plus } from 'lucide-react'
import { managerUrl } from '../../content/landing'

export function Breadcrumbs({ items }) {
  return <nav className="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a>{items.map((item, index) => <span key={item.label}><ChevronRight size={13} aria-hidden="true" />{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.label}</span>}</span>)}</nav>
}
export function PageIntro({ eyebrow, title, description, children, className = '' }) {
  return <header className={`page-intro ${className}`}><span className="support-eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}{children}</header>
}
export function PageCTA({ onOrder, title = 'Давайте разберёмся с вашим заданием.' }) {
  return <section className="page-cta"><div><span className="support-eyebrow">НАЧНЁМ С РАЗГОВОРА</span><h2>{title}</h2><p>Пришлите то, что есть. Уточним детали и согласуем стоимость и срок.</p></div><div className="page-cta-actions"><button type="button" className="button button-dark" onClick={() => onOrder()}>Отправить задание <ArrowRight size={18} /></button><a href={managerUrl} target="_blank" rel="noreferrer" className="text-action">Написать менеджеру <ArrowUpRight size={17} /></a></div></section>
}
export function Checklist({ items }) {
  return <ul className="page-checklist">{items.map(item => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
}
export function QuestionList({ questions, name = 'page-questions' }) {
  return <div className="page-questions">{questions.map(item => <details key={item.question} name={name}><summary>{item.question}<Plus size={19} aria-hidden="true" /></summary>{item.html ? <div className="prose" dangerouslySetInnerHTML={{ __html: item.html }} /> : <p>{item.answer}</p>}</details>)}</div>
}
export function DocumentArt({ icon = 'book', label = 'Всё начинается с задания' }) {
  return <div className="document-art" aria-hidden="true"><div className="document-art-halo" /><div className="document-art-back" /><div className="document-art-paper"><span>STUDENT HELPER</span><img src={`/assets/services/${icon}.svg`} alt="" width="120" height="120" /><i /><i /><i /></div><span className="document-art-seal"><Check size={25} /></span><span className="document-art-caption">{label}</span></div>
}
