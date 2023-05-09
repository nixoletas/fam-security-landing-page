import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='text-9xl text-slate-400'>
      <h1>FAM Security</h1>
      <Link href="/about"><h1 className='text-4xl'>About us</h1></Link>
    </div>
    </>
  )
}
