import Navbar from './components/Navbar'
import Hero from './components/hero'
import Presentation from './components/presentation'
import About from './components/about'
import Contact from './components/contact'
import Services from './components/services'


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Presentation />
      <About/>
      <Contact/>
      <Services/>
    </>
  )
}
