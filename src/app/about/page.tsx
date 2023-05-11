import Link from "next/link"
import Navbar from "../components/Navbar"

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <div className='text-9xl p-6 text-white h-screen'>
      <h1 className="animate-fade-in-down">About Us</h1>
    </div>
    <div>
        <Link href="/"><h2 className='text-4xl text-slate-100'>Back to home</h2></Link>
    </div>
    </>
  )
}