import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'

export default function Home() {
  return (
    <>
    <div className='content-container'>
      <Navbar/>
      <Hero/>
      <Section/>
    </div>
    </>
  )
}