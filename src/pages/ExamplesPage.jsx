import { siteUrl } from '../lib/siteUrl.js'
import { useState } from 'react'
import { ArrowUpRight, FileText, Search } from 'lucide-react'
import { library } from '../content/site'
import { Breadcrumbs, PageCTA, PageIntro } from '../components/pages/PageParts'
import WorkPreview from '../components/pages/WorkPreview'

const filters = [['all', 'Все работы'], ['degree', 'Курсовые и дипломы'], ['calc', 'Расчёты и лабораторные'], ['engineering', 'Чертежи и 3D'], ['presentation', 'Презентации и эссе']]
export default function ExamplesPage({ onOrder }) {
  const [group, setGroup] = useState('all')
  const [search, setSearch] = useState('')
  const [preview, setPreview] = useState(null)
  const visible = library.filter(work => (group === 'all' || work.group === group) && `${work.title} ${work.category}`.toLocaleLowerCase('ru').includes(search.trim().toLocaleLowerCase('ru')))
  return <><Breadcrumbs items={[{ label: 'Примеры работ' }]} /><PageIntro eyebrow="ПРИМЕРЫ РАБОТ" title={<>Оцените качество<br /><em>по реальным работам</em></>} description="Здесь собраны курсовые, дипломы, лабораторные, расчёты и чертежи, которые мы выполняли для студентов. Каждый документ можно открыть целиком." />
    <div className="library-toolbar"><div className="filter-chips" aria-label="Направления работ">{filters.map(([id, label]) => <button key={id} type="button" aria-pressed={group === id} onClick={() => setGroup(id)}>{label}</button>)}</div><label className="page-search"><Search size={18} /><span className="sr-only">Найти работу</span><input type="search" placeholder="Найти по теме" value={search} onChange={event => setSearch(event.target.value)} /></label></div>
    <p className="result-count" role="status">Показано работ: {visible.length}</p><div className="library-grid">{visible.map(work => <button type="button" className={`library-work${work.landscape ? ' is-landscape' : ''}`} key={work.slug} onClick={() => setPreview(work)}><span className="library-work-image"><img src={siteUrl(work.image)} alt={work.alt} width={work.width} height={work.height} loading="lazy" /><span className="round-link"><ArrowUpRight size={19} /></span></span><span className="library-work-caption"><small>{work.category}</small><strong>{work.title}</strong><span><FileText size={14} />Посмотреть работу</span></span></button>)}</div>
    {!visible.length && <div className="empty-results"><h2>Работы по вашему запросу не найдены</h2><p>Измените запрос или выберите другую категорию.</p><button type="button" className="text-action" onClick={() => { setSearch(''); setGroup('all') }}>Показать все работы <ArrowUpRight size={17} /></button></div>}
    <PageCTA onOrder={onOrder} title="Есть похожее задание?" /><WorkPreview work={preview} onClose={() => setPreview(null)} /></>
}
