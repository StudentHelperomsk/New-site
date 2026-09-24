import { ArrowRight, Send } from 'lucide-react'
import { managerUrl } from '../../content/landing'

export default function ContactSection({ onOrder }) {
  return <section className="contact-section" id="contacts" aria-labelledby="contacts-title">
    <div className="contact-copy"><span className="section-eyebrow">НАЧНЁМ С ВАШЕГО ЗАДАНИЯ</span><h2 id="contacts-title">Учёба сложная.<br /><span>С нами — понятнее.</span></h2><p>Пришлите задание и требования преподавателя.<br />Разберёмся с объёмом, стоимостью и сроками.</p><div className="contact-actions"><button className="button button-dark" onClick={onOrder}>Оценить задание <ArrowRight size={18} /></button><a className="button button-outline" href={managerUrl} target="_blank" rel="noreferrer"><Send size={18} />Написать в Telegram</a></div></div>
    <div className="contact-art" aria-hidden="true"><div className="contact-art-circle" /><img src="/assets/logo.svg" alt="" width="250" height="158" /><span>Больше уверенности.<br />Меньше дедлайнов.</span></div>
  </section>
}
