import { useEffect, useRef, useState } from 'react'
import { resolvePage } from '../content/site'
import SitePage from '../pages/SitePage'
import useScrollReveal from '../hooks/useScrollReveal'
import Header from '../components/Header'
import Hero from '../components/Hero'
import EstimateDialog from '../components/EstimateDialog'
import StatsBar from '../components/StatsBar'
import MobileOrderBar from '../components/MobileOrderBar'
import ServicesSection from '../components/landing/ServicesSection'
import ExamplesSection from '../components/landing/ExamplesSection'
import ProcessSection from '../components/landing/ProcessSection'
import ReviewsSection from '../components/landing/ReviewsSection'
import FaqSection from '../components/landing/FaqSection'
import ContactSection from '../components/landing/ContactSection'
import Footer from '../components/landing/Footer'
import '../styles/landing.css'

export default function App({ path = typeof window === 'undefined' ? '/' : window.location.pathname }) {
  const page = resolvePage(path)
  const home = page.type === 'home'
  const content = useRef(null)
  useScrollReveal(content)
  const [description, setDescription] = useState('')
  const [estimateOpen, setEstimateOpen] = useState(false)
  useEffect(() => {
    document.title = page.seoTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
  }, [page.seoTitle, page.description])
  const openEstimate = (service) => {
    if (typeof service === 'string') setDescription(current => current.trim() ? current : `Нужна помощь: ${service.toLowerCase()}. `)
    setEstimateOpen(true)
  }
  return <>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <div className="page-shell" id="top">
      <Header onOrder={openEstimate} path={page.path} />
      <main id="main" ref={content} className={home ? 'home-main' : 'page-main'}>
        {home ? <>
        <div className="hero-layout"><Hero onOrder={openEstimate} /></div>
        <StatsBar />
        <div className="landing-content">
          <ProcessSection onOrder={openEstimate} />
          <ServicesSection onSelect={openEstimate} />
          <ExamplesSection />
          <ReviewsSection />
          <FaqSection />
          <ContactSection onOrder={openEstimate} />
        </div>
        </> : <SitePage page={page} onOrder={openEstimate} />}
      </main>
      <Footer />
    </div>
    {!['legal', 'pay', 'not-found'].includes(page.type) && <MobileOrderBar home={home} onOrder={openEstimate} />}
    <EstimateDialog open={estimateOpen} onClose={() => setEstimateOpen(false)} description={description} onDescriptionChange={setDescription} />
  </>
}
