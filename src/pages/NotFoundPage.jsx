import { ArrowRight } from 'lucide-react'
import { DocumentArt, PageIntro } from '../components/pages/PageParts'

export default function NotFoundPage() {
  return <div className="page-hero-split not-found"><PageIntro eyebrow="404 / ПОХОЖЕ, МЫ РАЗМИНУЛИСЬ" title={<>Эта страница<br /><em>не нашлась.</em></>} description="Возможно, ссылка изменилась. Давайте вернёмся к вашему заданию."><a href="/services/" className="button button-dark">Посмотреть услуги <ArrowRight size={18} /></a></PageIntro><DocumentArt icon="practice-report" /></div>
}
