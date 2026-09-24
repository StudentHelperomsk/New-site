import { Plus, ArrowUpRight } from 'lucide-react'
import { managerUrl, questions } from '../../content/landing'

export default function FaqSection() {
  return <section className="landing-section faq-section" id="faq" aria-labelledby="faq-title">
    <div className="faq-intro"><span className="section-eyebrow">ЕСТЬ ВОПРОСЫ?</span><h2 id="faq-title">Давайте<br /> разберёмся</h2><p>А если не нашли свой ответ —<br />просто напишите менеджеру.</p><a className="text-action" href={managerUrl} target="_blank" rel="noreferrer">Задать вопрос <ArrowUpRight size={17} /></a></div>
    <div className="faq-list">{questions.map(item => <details className="faq-item" name="questions" key={item.question}><summary>{item.question}<Plus size={19} /></summary><p>{item.answer}</p></details>)}</div>
  </section>
}
