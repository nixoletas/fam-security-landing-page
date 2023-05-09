import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <>
    <Navbar />
    <div className='bg-blue-900/50 text-9xl text-slate-400 h-screen'>
      <h1>Contact Us</h1>
    </div>
    <div>
        <Link href="/"><h2 className='text-4xl text-slate-100'>Back to home</h2></Link>
    </div>
    </>
  )
}