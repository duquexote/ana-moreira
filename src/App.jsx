import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Methods from './components/Methods'
import HelpAreas from './components/HelpAreas'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Methods />
        <HelpAreas />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
