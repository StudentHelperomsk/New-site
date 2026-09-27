import ServicesPage from './ServicesPage'
import ServicePage from './ServicePage'
import PricesPage from './PricesPage'
import ExamplesPage from './ExamplesPage'
import GuaranteesPage from './GuaranteesPage'
import GuidesPage from './GuidesPage'
import ArticlePage from './ArticlePage'
import FaqPage from './FaqPage'
import PaymentPage from './PaymentPage'
import NotFoundPage from './NotFoundPage'

export default function SitePage({ page, onOrder }) {
  switch (page.type) {
    case 'services': return <ServicesPage onOrder={onOrder} />
    case 'service': return <ServicePage service={page.item} onOrder={onOrder} />
    case 'prices': return <PricesPage onOrder={onOrder} />
    case 'examples': return <ExamplesPage onOrder={onOrder} />
    case 'guarantees': return <GuaranteesPage onOrder={onOrder} />
    case 'guides': return <GuidesPage onOrder={onOrder} />
    case 'article': return <ArticlePage article={page.item} onOrder={onOrder} />
    case 'legal': return <ArticlePage article={page.item} legal />
    case 'faq': return <FaqPage />
    case 'pay': return <PaymentPage />
    default: return <NotFoundPage />
  }
}
