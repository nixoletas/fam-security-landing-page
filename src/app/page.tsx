import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Fazemos from './components/Fazemos'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <div className='content-container'>
      <Navbar/>
      <Hero/>
      <Section/>
      <Fazemos />
      <Footer />
    </div>
    </>
  )
}