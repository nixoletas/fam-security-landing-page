import React from "react";
import Image from "next/image";

export default function Hero() {
    return(
        <>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      
    <div id='home' className='h-24 overflow-y-hidden'></div>
    <div className='h-full overflow-y-hidden'>
    <div className=''>
      <div className='
     text-slate-400'>
        <div className=' mt-2  flex flex-col 
        items-center text-center overflow-y-hidden'>
          <h1 className='text-3xl max-sm:text-2xl text-white font-black uppercase'>
            <span className=''>vigilância</span>,
            <span className=''> tecnologia </span>
            <span className=''>e facilities </span><br/>
          <span className='max-sm:text-2xl text-3xl gradient-light font-bold uppercase'> na palma da sua mão!</span></h1>
          <p className='text-lg font-bold font-sans  text-gray3 uppercase'>segurança, 
          parceria e confiança.</p>
          <div className="p-4">
            <a href="https://api.whatsapp.com/send?phone=5511989184515">
          <button className=' shadow-cyan-500/50 flex gap-2 
        bg-blue-950 font-bold uppercase p-4 rounded-md hover:rounded-xl mt-8 
         hover:text-2xl text-xl text-green-500 animate-pulse duration-300 ease-in-out dark:drop-shadow-[0_0_0.3rem_#a1f1f9]'>SAIBA MAIS<i className="fa-brands fa-whatsapp text-xl"></i></button></a></div>
        </div>

        <div id="heroId" className='flex flex-col my-20 mx-1 justify-center items-center text-center'>
          <div className=' animate-pulse flex flex-row space-x-10 '>
            <a href="/#vigilant">
          <Image className='max-sm:w-24  shadow-cyan-500/50   
          dark:drop-shadow-[0_0_0.3rem_#ffffff] cursor-pointer hover:scale-110 duration-300 ease-in-out'
          src="/vigilant.svg" alt="My SVG file" width={120} height={120}/>
          </a>

          <a href="/#technology">
          <Image className=' max-sm:w-20 
          dark:drop-shadow-[0_0_0.3rem_#ffffff] cursor-pointer hover:scale-110 duration-300 ease-in-out' 
          src="/technology.svg" alt="My SVG file" width={120} height={120}/>
          </a>

          <a href="/#facilities">
          <Image className='max-sm:w-20 
          dark:drop-shadow-[0_0_0.3rem_#ffffff] cursor-pointer hover:scale-110 duration-300 ease-in-out' 
          src="/facilities.svg" alt="My SVG file" width={120} height={120}/>
          </a>

          </div>
        </div>

    </div>
    </div>
    </div>
    </>
    )
}
