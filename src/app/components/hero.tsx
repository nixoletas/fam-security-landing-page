import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div id='home' className='h-24'></div>
    <div className='h-full scroll-smooth'>
    <div className=''>
      <div className='transition-all
     text-slate-400'>
        <div className='animate-fade-in-down mt-2  flex flex-col 
        items-center text-center'>
          <h1 className='px-12 text-3xl max-sm:text-2xl text-white font-black uppercase'>
            <span className=''>vigilância</span>,
            <span className='font-FiraCode'> tecnologia </span>
            <span className='font-trebuchet '>e facilities </span><br/>
          <span className='max-sm:text-2xl text-3xl gradient-light font-bold uppercase'> na palma da sua mão!</span></h1>
          <p className='text-lg font-bold font-sans  text-gray3 uppercase'>segurança, 
          parceria e confiança.</p>
          <a href='#presentation'>
          <button className='shadow-cyan-500/50 flex flex-col bg-slate-950
          hover:bg-blue-950 text-white font-bold uppercase p-4 rounded-md hover:rounded-xl mt-4 
          text-sm hover:text-base animate-pulse duration-300 ease-in-out'>
            SAIBA MAIS</button></a>
        </div>

        <div className=' flex flex-col my-10 mx-1 justify-center items-center text-center'>
          <div className='animate-fade-in-up flex flex-row space-x-10'>
          <Image className='max-sm:w-20  shadow-cyan-500/50   
          dark:drop-shadow-[0_0_0.3rem_#ffffff] duration-500 ease-in-out'
          src="/vigilant.svg" alt="My SVG file" width={120} height={120}/>
          <Image className=' max-sm:w-20 duration-500 hover:animate-pulse
          dark:drop-shadow-[0_0_0.3rem_#ffffff] ease-in-out' 
          src="/technology.svg" alt="My SVG file" width={120} height={120}/>
          <Image className='max-sm:w-20 duration-500 hover:animate-pulse
          dark:drop-shadow-[0_0_0.3rem_#ffffff] ease-in-out' 
          src="/facilities.svg" alt="My SVG file" width={120} height={120}/>
          </div>
        </div>

    </div>
        <div className=' mt-28 dark:drop-shadow-[0_0_0.1rem_#ffffff70] w-full flex animate-bounce align-bottom  justify-center text-center '>
            <Image src='/scroll-down.svg' alt='scroll down' width={50} height={50}/>
        </div>
    </div>
    </div>
    </>
  )
}
