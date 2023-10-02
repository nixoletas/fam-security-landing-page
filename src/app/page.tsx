import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Fazemos from './components/Fazemos'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <div className='content-container'>
      <Navbar/>
      <Hero/>
      <Fazemos />
      <Section/>
      <Footer />
    </div>
    </>
  )
}