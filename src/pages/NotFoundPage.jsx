import { siteUrl } from '../lib/siteUrl.js'
import { ArrowRight } from 'lucide-react'
import { DocumentArt, PageIntro } from '../components/pages/PageParts'

export default function NotFoundPage() {
  return <div className="page-hero-split not-found"><PageIntro eyebrow="ОШИБКА 404" title={<>Страница<br /><em>не найдена</em></>} description="Проверьте адрес или перейдите в каталог услуг."><a href={siteUrl("/services/")} className="button button-dark">Посмотреть услуги <ArrowRight size={18} /></a></PageIntro><DocumentArt icon="practice-report" /></div>
}
