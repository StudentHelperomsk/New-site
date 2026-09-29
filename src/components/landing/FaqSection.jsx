import { siteUrl } from '../../lib/siteUrl.js'
import { Plus, ArrowUpRight } from 'lucide-react'
import { managerUrl, questions } from '../../content/landing'

export default function FaqSection() {
  return <section className="landing-section faq-section" id="faq" aria-labelledby="faq-title">
    <div className="faq-intro"><span className="section-eyebrow">ВОПРОСЫ И ОТВЕТЫ</span><h2 id="faq-title">Что важно знать<br />перед заказом</h2><p>О стоимости, сроках, оплате и доработках. Другие вопросы можно задать менеджеру.</p><a className="text-action" href={siteUrl(managerUrl)} target="_blank" rel="noreferrer">Задать вопрос <ArrowUpRight size={17} /></a></div>
    <div className="faq-list">{questions.map(item => <details className="faq-item" name="questions" key={item.question}><summary>{item.question}<Plus size={19} /></summary><p>{item.answer}</p></details>)}</div>
  </section>
}
