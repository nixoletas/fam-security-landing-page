import Navbar from './components/Navbar'
import Hero from './components/hero'
import Presentation from './components/presentation'
import About from './components/about'
import Contact from './components/contact'
import Services from './components/services'
import Arrow from './components/Arrow'


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Arrow />
      <Presentation />
    </>
  )
}
