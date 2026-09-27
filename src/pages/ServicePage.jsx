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
    <div className="page-hero-split service-page-hero"><PageIntro eyebrow="ПОДДЕРЖКА ДО СДАЧИ" title={service.label} description={service.lead}><div className="service-page-order"><button className="button button-dark" type="button" onClick={() => onOrder(service.label)}>Обсудить задание <ArrowRight size={18} /></button><div><span>Начальная стоимость</span><strong>от {formatPrice(service.price)} ₽</strong></div></div></PageIntro>
      {example ? <button className={`service-proof${example.landscape ? ' is-landscape' : ''}`} type="button" onClick={() => setPreview(example)}><span className="service-proof-label"><FileText size={15} />ИЗ НАШИХ РАБОТ</span><img src={example.image} alt={example.alt} width={example.width} height={example.height} /><span className="service-proof-caption"><span>{example.title}</span><ArrowUpRight size={21} /></span></button> : <DocumentArt icon={service.icon} label="Внимание к каждой детали" />}
    </div>
    <div className="service-page-body"><div><section className="editorial-section"><span className="support-eyebrow">ВНИКАЕМ В ДЕТАЛИ</span><h2>{service.detailTitle}</h2>{service.detail.map(text => <p key={text}>{text}</p>)}</section><section className="editorial-section"><span className="support-eyebrow">РЕЗУЛЬТАТ</span><h2>Что будет у вас</h2><Checklist items={service.deliverables} /><p className="quiet-note">Правки по исходному заданию — бесплатно и без ограничения по количеству. Изменившиеся требования обсуждаем индивидуально.</p><a className="text-action" href="/guarantees/">Подробнее о поддержке <ArrowUpRight size={17} /></a></section></div>
      <aside className="materials-note"><span className="support-eyebrow">ДЛЯ ПЕРВОГО СООБЩЕНИЯ</span><h2>Что прислать<br />менеджеру</h2><Checklist items={service.materials} /><p>Даже если есть не всё — начнём с ваших материалов и уточним остальное.</p><a href="/guides/chto-otpravit-dlya-rascheta/" className="text-action">Короткая памятка <ArrowUpRight size={17} /></a></aside>
    </div>
    <section className="page-faq-section"><div><span className="support-eyebrow">ОБЫЧНО СПРАШИВАЮТ</span><h2>До начала работы</h2></div><QuestionList questions={service.faq} /></section>
    {related.length > 0 && <section className="related-section"><span className="support-eyebrow">ЕСЛИ ЗАДАЧА БОЛЬШЕ</span><div className="related-links">{related.map(item => <a href={item.path} key={item.path}><span>{item.label}<small>от {formatPrice(item.price)} ₽</small></span><ArrowUpRight size={20} /></a>)}</div></section>}
    <PageCTA onOrder={() => onOrder(service.label)} /><WorkPreview work={preview} onClose={() => setPreview(null)} />
  </>
}
