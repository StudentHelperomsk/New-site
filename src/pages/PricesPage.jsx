import { useEffect } from 'react'
import { siteUrl } from '../lib/siteUrl'
import ServicesPage from './ServicesPage'

// Preserve old links while keeping one public service catalog.
export default function PricesPage({ onOrder }) {
  useEffect(() => {
    window.location.replace(siteUrl('/services/') + window.location.search + window.location.hash)
  }, [])
  return <ServicesPage onOrder={onOrder} />
}
