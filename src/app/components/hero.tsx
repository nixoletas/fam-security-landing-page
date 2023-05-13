import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div id='home' className='h-full scroll-smooth'>
    <div className=''>
      <div className='transition-all
     text-slate-400'>
        <div className='animate-fade-in-down mt-40  flex flex-col 
        items-center text-center'>
          <h1 className='text-3xl p-2 text-white font-black uppercase'>
            <span className=''>vigilância</span>,
            <span className='font-FiraCode'> tecnologia </span>
            <span className='font-trebuchet '>e facilities </span> 
          <span className='text-3xl gradient-light font-bold uppercase'> na palma da sua mão!</span></h1>
          <p className='text-lg font-bold font-sans  text-gray3 uppercase'>segurança, 
          parceria e confiança.</p>
          <a href='#presentation'>
          <button className='shadow-cyan-500/50 flex flex-col bg-slate-950
          hover:bg-blue-950 text-white font-bold uppercase p-4 rounded-md hover:rounded-xl mt-4 
          text-sm hover:text-base animate-pulse duration-300 ease-in-out'>
            SAIBA MAIS</button></a>
        </div>

        <div className='flex flex-col my-40 justify-center items-center text-center p-6'>
          <div className='animate-fade-in-up flex flex-row space-x-10'>
          <Image className='shadow-cyan-500/50 hover:w-52 
          dark:drop-shadow-[0_0_0.2rem_#ffffff70] duration-500 ease-in-out'
          src="/vigilant.svg" alt="My SVG file" width={80} height={80}/>
          <Image className='hover:w-52 duration-500 
          dark:drop-shadow-[0_0_0.2rem_#ffffff70] ease-in-out' 
          src="/technology.svg" alt="My SVG file" width={80} height={80}/>
          <Image className='hover:w-52 hover:dark:invert-3 duration-500 
          dark:drop-shadow-[0_0_0.2rem_#ffffff70] ease-in-out' 
          src="/facilities.svg" alt="My SVG file" width={80} height={80}/>
          </div>
        </div>

    </div>
        <div className='dark:drop-shadow-[0_0_0.1rem_#ffffff70] w-full flex animate-bounce align-bottom  justify-center text-center '>
            <Image src='/scroll-down.svg' alt='scroll down' width={50} height={50}/>
        </div>
    </div>
    </div>
    </>
  )
}
