import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import EstimateDialog from '../components/EstimateDialog'
import StatsBar from '../components/StatsBar'
import ServicesSection from '../components/landing/ServicesSection'
import ExamplesSection from '../components/landing/ExamplesSection'
import ProcessSection from '../components/landing/ProcessSection'
import ReviewsSection from '../components/landing/ReviewsSection'
import FaqSection from '../components/landing/FaqSection'
import ContactSection from '../components/landing/ContactSection'
import Footer from '../components/landing/Footer'
import '../styles/landing.css'

export default function App() {
  const [description, setDescription] = useState('')
  const [estimateOpen, setEstimateOpen] = useState(false)
  const openEstimate = (service) => {
    if (typeof service === 'string') setDescription(current => current.trim() ? current : `Нужна помощь: ${service.toLowerCase()}. `)
    setEstimateOpen(true)
  }
  return <>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <div className="page-shell" id="top">
      <Header onOrder={openEstimate} />
      <main id="main">
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
      </main>
      <Footer />
    </div>
    <EstimateDialog open={estimateOpen} onClose={() => setEstimateOpen(false)} description={description} onDescriptionChange={setDescription} />
  </>
}
