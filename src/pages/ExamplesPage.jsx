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
  return <><Breadcrumbs items={[{ label: 'Примеры работ' }]} /><PageIntro eyebrow="МОЖНО ОТКРЫТЬ И РАССМОТРЕТЬ" title={<>За каждой работой —<br /><em>настоящая задача.</em></>} description="Курсовые, расчёты, чертежи и презентации из нашей практики. Все 11 работ доступны в полном PDF." />
    <div className="library-toolbar"><div className="filter-chips" aria-label="Направления работ">{filters.map(([id, label]) => <button key={id} type="button" aria-pressed={group === id} onClick={() => setGroup(id)}>{label}</button>)}</div><label className="page-search"><Search size={18} /><span className="sr-only">Найти работу</span><input type="search" placeholder="Найти по теме" value={search} onChange={event => setSearch(event.target.value)} /></label></div>
    <p className="result-count" role="status">Показано работ: {visible.length}</p><div className="library-grid">{visible.map(work => <button type="button" className={`library-work${work.landscape ? ' is-landscape' : ''}`} key={work.slug} onClick={() => setPreview(work)}><span className="library-work-image"><img src={work.image} alt={work.alt} width={work.width} height={work.height} loading="lazy" /><span className="round-link"><ArrowUpRight size={19} /></span></span><span className="library-work-caption"><small>{work.category}</small><strong>{work.title}</strong><span><FileText size={14} />Посмотреть работу</span></span></button>)}</div>
    {!visible.length && <div className="empty-results"><h2>Такой темы пока нет в примерах</h2><p>Попробуйте другое слово или покажите нам ваше задание.</p><button type="button" className="text-action" onClick={() => { setSearch(''); setGroup('all') }}>Показать все работы <ArrowUpRight size={17} /></button></div>}
    <PageCTA onOrder={onOrder} title="У вас похожая задача?" /><WorkPreview work={preview} onClose={() => setPreview(null)} /></>
}
