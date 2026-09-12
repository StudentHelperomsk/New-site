import Header from '../components/Header'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'

export default function App() {
  return (
    <main className="page-shell">
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />
      <Header />
      <section className="home-screen" aria-label="Главный экран Student Helper">
        <Hero />
        <StatsBar />
      </section>
    </main>
  )
}
