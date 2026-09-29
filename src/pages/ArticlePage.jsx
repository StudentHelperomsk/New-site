import { siteUrl, siteHtml } from '../lib/siteUrl.js'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { guides } from '../content/site'
import ReadingNavigation from '../components/pages/ReadingNavigation'
import { managerUrl } from '../content/landing'
import { Breadcrumbs, PageCTA, PageIntro } from '../components/pages/PageParts'

export default function ArticlePage({ article, legal = false, onOrder }) {
  const next = legal ? null : guides[(guides.findIndex(guide => guide.path === article.path) + 1) % guides.length]
  return <><Breadcrumbs items={legal ? [{ label: article.title }] : [{ label: 'Материалы', href: '/guides/' }, { label: article.title }]} />
    <PageIntro className="reading-intro" eyebrow={legal ? 'ДОКУМЕНТЫ STUDENT HELPER' : 'ИНСТРУКЦИЯ'} title={article.title} description={article.lead}>{!legal && <span className="reading-time"><Clock size={15} />{article.minutes} мин на чтение</span>}</PageIntro>
    <div className="reading-layout"><article className={`prose article-prose${legal ? ' legal-prose' : ''}`} dangerouslySetInnerHTML={{ __html: siteHtml(article.body) }} /><aside className="reading-aside"><ReadingNavigation article={article} legal={legal} /><div className="reading-help"><strong>Остались вопросы?</strong><p>Задайте вопрос менеджеру в Telegram.</p><a href={siteUrl(managerUrl)} target="_blank" rel="noreferrer" className="text-action">Написать менеджеру <ArrowUpRight size={16} /></a></div></aside></div>
    {next && <a className="next-guide" href={siteUrl(next.path)}><div><span className="support-eyebrow">ДРУГИЕ МАТЕРИАЛЫ</span><h2>{next.title}</h2></div><ArrowRight size={26} /></a>}{!legal && <PageCTA onOrder={onOrder} />}</>
}
