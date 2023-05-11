import Link from 'next/link'
import Navbar from './components/Navbar'
import Image from 'next/image'
import { Smooch } from 'next/font/google'

export default function Home() {
  return (
    <>
    <div className='fixed animate-going-up 
    bg-gradient-to-r from-darkblue via-blue-800 to-purple-900/40 
    h-20 blur-3xl opacity-20 w-full'></div>
    <Navbar/>
    <div className='scroll-smooth'>
    <div className='text-9xl h-full'>
      <div className='mb-40
      flex flex-col transition-all md:flex-row
     text-slate-400 h-full'>
        <div className='ml-3 animate-fade-in-down min-w-[50%] mt-40 flex flex-col 
        items-center text-center'>
          <h1 className='text-4xl p-2 text-white font-black uppercase'>
            <span className=''>vigilância</span>,
            <span className='font-FiraCode'> tecnologia </span>
            <span className='font-trebuchet '>e facilities </span> 
          <span className='text-4xl gradient-light font-bold uppercase'> na palma da sua mão!</span></h1>
          <p className='text-lg font-bold font-sans  text-gray3 uppercase'>segurança, 
          parceria e confiança.</p>
          <Link href={'#section-2'} >
          <button className='shadow-cyan-500/50 flex flex-col bg-slate-950
          hover:bg-blue-950 text-white font-bold uppercase p-4 rounded-md hover:rounded-xl mt-4 
          text-sm hover:text-base animate-pulse duration-300 ease-in-out'>
            SAIBA MAIS</button>
          </Link>
        </div>
        <div className='min-w-[50%] flex flex-col justify-center items-center text-center p-6 h-96'>
          <div className='animate-fade-in-up flex flex-row mt-20 space-x-5'>
          <Image className='shadow-cyan-500/50 hover:w-52 
          dark:drop-shadow-[0_0_0.2rem_#ffffff70] duration-500 ease-in-out'
          src="/vigilant.svg" alt="My SVG file" width={170} height={170}/>
          <Image className='hover:w-52 duration-500 
          dark:drop-shadow-[0_0_0.2rem_#ffffff70] ease-in-out' 
          src="/technology.svg" alt="My SVG file" width={170} height={170}/>
          <Image className='hover:w-52 hover:dark:invert-3 duration-500 
          dark:drop-shadow-[0_0_0.2rem_#ffffff70] ease-in-out' 
          src="/facilities.svg" alt="My SVG file" width={170} height={170}/>
          </div>
        </div>
    </div>
    <section id="section-2" className='flex flex-col justify-center items-center text-center'>
    <div className=' text-white text-center space-y-96 h-96 text-7xl uppercase font-black'>
      <h1>Tecnologia</h1>
      <h1>Segurança</h1>
      <h1>Parceria</h1>
      <h1>Confiança</h1>
    </div>
      </section>
    </div>
    </div>
    </>
  )
}
