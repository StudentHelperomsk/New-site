import { siteUrl } from '../lib/siteUrl.js'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react'
import { catalog, formatPrice, library } from '../content/site'
import { Breadcrumbs, Checklist, DocumentArt, PageCTA, PageIntro, QuestionList } from '../components/pages/PageParts'
import WorkPreview from '../components/pages/WorkPreview'

export default function ServicePage({ service, onOrder }) {
  const [preview, setPreview] = useState(null)
  const example = library.find(item => item.pdf === service.example)
  const related = service.related.map(path => catalog.find(item => item.path === path)).filter(Boolean).slice(0, 3)
  return <><Breadcrumbs items={[{ label: 'Услуги', href: '/services/' }, { label: service.label }]} />
    <div className="page-hero-split service-page-hero"><PageIntro eyebrow="ПОДДЕРЖКА ДО СДАЧИ" title={service.label} description={service.lead}><div className="service-page-order"><button className="button button-dark" type="button" onClick={() => onOrder(service.label)}>Оценить задание <ArrowRight size={18} /></button><div><span>Начальная стоимость</span><strong>от {formatPrice(service.price)} ₽</strong></div></div></PageIntro>
      {example ? <button className={`service-proof${example.landscape ? ' is-landscape' : ''}`} type="button" onClick={() => setPreview(example)}><span className="service-proof-label"><FileText size={15} />ПРИМЕР РАБОТЫ</span><img src={siteUrl(example.image)} alt={example.alt} width={example.width} height={example.height} /><span className="service-proof-caption"><span>{example.title}</span><ArrowUpRight size={21} /></span></button> : <DocumentArt icon={service.icon} label="По требованиям вашего вуза" />}
    </div>
    <div className="service-page-body"><div><section className="editorial-section"><span className="support-eyebrow">СОДЕРЖАНИЕ РАБОТЫ</span><h2>{service.detailTitle}</h2>{service.detail.map(text => <p key={text}>{text}</p>)}</section><section className="editorial-section"><span className="support-eyebrow">РЕЗУЛЬТАТ</span><h2>Что вы получите</h2><Checklist items={service.deliverables} /><p className="quiet-note">Правки по исходному заданию — бесплатно и без ограничения по количеству. Изменившиеся требования обсуждаем индивидуально.</p><a className="text-action" href={siteUrl("/guarantees/")}>Гарантии и доработки <ArrowUpRight size={17} /></a></section></div>
      <aside className="materials-note"><span className="support-eyebrow">МАТЕРИАЛЫ ДЛЯ ОЦЕНКИ</span><h2>Что прислать<br />менеджеру</h2><Checklist items={service.materials} /><p>Если каких-то материалов нет, отправьте имеющиеся. Менеджер уточнит, что ещё потребуется.</p><a href={siteUrl("/guides/chto-otpravit-dlya-rascheta/")} className="text-action">Что приложить к заявке <ArrowUpRight size={17} /></a></aside>
    </div>
    <section className="page-faq-section"><div><span className="support-eyebrow">ВОПРОСЫ И ОТВЕТЫ</span><h2>Что важно знать перед заказом</h2></div><QuestionList questions={service.faq} /></section>
    {related.length > 0 && <section className="related-section"><span className="support-eyebrow">ДРУГИЕ УСЛУГИ</span><div className="related-links">{related.map(item => <a href={siteUrl(item.path)} key={item.path}><span>{item.label}<small>от {formatPrice(item.price)} ₽</small></span><ArrowUpRight size={20} /></a>)}</div></section>}
    <PageCTA onOrder={() => onOrder(service.label)} /><WorkPreview work={preview} onClose={() => setPreview(null)} />
  </>
}
