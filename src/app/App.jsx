import Header from '../components/Header'
import Hero from '../components/Hero'
import EstimateForm from '../components/EstimateForm'
import StatsBar from '../components/StatsBar'

export default function App() {
  const focusEstimate = () => {
    document.getElementById('estimate').scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.getElementById('description').focus({ preventScroll: true })
  }
  return <>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <div className="page-shell" id="top">
      <Header onOrder={focusEstimate} />
      <main id="main">
        <div className="hero-layout"><Hero onOrder={focusEstimate} /><EstimateForm /></div>
        <StatsBar />
      </main>
    </div>
  </>
}
