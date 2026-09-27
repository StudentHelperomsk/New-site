import { ArrowUpRight, Check } from 'lucide-react'
import { guarantees } from '../content/site'
import { supportStory } from '../content/support'
import SupportArtwork from '../components/landing/SupportArtwork'
import { Breadcrumbs, PageCTA, PageIntro } from '../components/pages/PageParts'

export default function GuaranteesPage({ onOrder }) {
  return <><Breadcrumbs items={[{ label: 'Гарантии и поддержка' }]} /><div className="page-hero-split"><PageIntro eyebrow="НА ВАШЕЙ СТОРОНЕ" title={<>Передать файл —<br /><em>не конец работы.</em></>} description="Остаёмся на связи до сдачи. Разбираем замечания, исправляем и помогаем пройти весь путь с понятными договорённостями."><div className="guarantee-hero-note"><Check size={20} />Правки по исходному заданию — безлимитно и бесплатно.</div></PageIntro><div className="guarantee-page-art"><SupportArtwork active={2} scenes={supportStory} /></div></div>
    <section className="guarantee-principles" aria-label="Условия работы">{guarantees.map((item, index) => <article key={item.title}><span className="principle-number">0{index + 1}</span><h2>{item.title}</h2><div className="prose" dangerouslySetInnerHTML={{ __html: item.body }} /></article>)}</section>
    <div className="page-note"><span>Если требования изменились</span><p>Обсудим ситуацию индивидуально и постараемся пойти навстречу. Полностью новое задание оцениваем отдельно.</p><a href="/guides/kak-prohodyat-dorabotki/" className="text-action">Как передать замечания <ArrowUpRight size={16} /></a></div><PageCTA onOrder={onOrder} /></>
}
