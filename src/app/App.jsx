import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import EstimateForm from '../components/EstimateForm'
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
  const focusEstimate = (service) => {
    if (typeof service === 'string') setDescription(current => current.trim() ? current : `Нужна помощь: ${service.toLowerCase()}. `)
    document.getElementById('estimate').scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.getElementById('description').focus({ preventScroll: true })
  }
  return <>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <div className="page-shell" id="top">
      <Header onOrder={focusEstimate} />
      <main id="main">
        <div className="hero-layout"><Hero onOrder={focusEstimate} /><EstimateForm description={description} onDescriptionChange={setDescription} /></div>
        <StatsBar />
        <div className="landing-content">
          <ProcessSection onOrder={focusEstimate} />
          <ServicesSection onSelect={focusEstimate} />
          <ExamplesSection />
          <ReviewsSection />
          <FaqSection />
          <ContactSection onOrder={focusEstimate} />
        </div>
      </main>
      <Footer />
    </div>
  </>
}
