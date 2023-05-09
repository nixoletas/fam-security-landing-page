import Link from "next/link"

export default function AboutUs() {
  return (
    <>
    <div className='text-9xl text-slate-400'>
      <h1>About Us</h1>
    </div>
    <div>
        <Link href="/"><h2 className='text-4xl text-slate-100'>Back to home</h2></Link>
    </div>
    </>
  )
}