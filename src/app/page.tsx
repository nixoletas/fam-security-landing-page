import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='bg-blue-900/50 text-9xl h-screen'>
      <h1>Home</h1>
    </div>
    </>
  )
}
