import { useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { fullQuestions } from '../content/site'
import { managerUrl } from '../content/landing'
import { Breadcrumbs, PageIntro, QuestionList } from '../components/pages/PageParts'

const groups = [['all','Все вопросы'],['order','О задании'],['payment','Оплата'],['support','Поддержка'],['documents','Документы']]
export default function FaqPage() {
  const [group, setGroup] = useState('all')
  const [search, setSearch] = useState('')
  const visible = fullQuestions.filter(item => (group === 'all' || item.group === group) && `${item.question} ${item.answer}`.toLocaleLowerCase('ru').includes(search.trim().toLocaleLowerCase('ru')))
  return <><Breadcrumbs items={[{ label: 'Вопросы и ответы' }]} /><PageIntro eyebrow="ДАВАЙТЕ РАЗБЕРЁМСЯ" title={<>Спросить —<br /><em>это нормально.</em></>} description="Собрали ответы про задания, оплату, правки и документы. Если вашего вопроса здесь нет — мы на связи." />
    <div className="faq-page-layout"><aside className="faq-page-aside"><label className="page-search"><Search size={18} /><span className="sr-only">Поиск по вопросам</span><input type="search" placeholder="Ваш вопрос" value={search} onChange={event => setSearch(event.target.value)} /></label><div className="faq-categories" aria-label="Темы вопросов">{groups.map(([id,label]) => <button type="button" key={id} aria-pressed={id === group} onClick={() => setGroup(id)}>{label}</button>)}</div><div className="reading-help"><strong>Можно просто написать</strong><p>Менеджер поможет разобраться в вашем задании.</p><a href={managerUrl} target="_blank" rel="noreferrer" className="text-action">Открыть Telegram <ArrowUpRight size={16} /></a></div></aside><section><p className="result-count" role="status">Найдено ответов: {visible.length}</p><QuestionList questions={visible} />{!visible.length && <div className="empty-results"><h2>Такого ответа пока нет</h2><p>Попробуйте другое слово или напишите менеджеру.</p><button type="button" className="text-action" onClick={() => { setGroup('all'); setSearch('') }}>Показать все вопросы</button></div>}</section></div></>
}
