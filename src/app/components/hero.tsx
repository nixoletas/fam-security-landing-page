import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div id='home' className='scroll-smooth'>
    <div className='text-9xl h-full  mb-10'>
      <div className=' h-screen flex flex-col transition-all md:flex-row
     text-slate-400'>
        <div className='ml-3 animate-fade-in-down min-w-[50%] mt-52 flex flex-col 
        items-center text-center'>
          <h1 className=' text-4xl p-2 text-white font-black uppercase'>
            <span className=''>vigilância</span>,
            <span className='font-FiraCode'> tecnologia </span>
            <span className='font-trebuchet '>e facilities </span> 
          <span className='text-4xl gradient-light font-bold uppercase'> na palma da sua mão!</span></h1>
          <p className='text-lg font-bold font-sans  text-gray3 uppercase'>segurança, 
          parceria e confiança.</p>
          <a href='#presentation'>
          <button className='shadow-cyan-500/50 flex flex-col bg-slate-950
          hover:bg-blue-950 text-white font-bold uppercase p-4 rounded-md hover:rounded-xl mt-4 
          text-sm hover:text-base animate-pulse duration-300 ease-in-out'>
            SAIBA MAIS</button></a>
        </div>
        <div className=' max-sm:hidden min-w-[50%] flex flex-col justify-center items-center text-center p-6 h-96'>
          <div className='animate-fade-in-up flex flex-row mt-52 space-x-5'>
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
    </div>
    </div>
    </>
  )
}
