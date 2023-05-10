import Link from 'next/link'
import Navbar from './components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-r from-blue-950/70 to-blue-950/30 text-9xl text-slate-400 h-screen'>
    <div className='
    flex flex-col transition-all md:flex-row
    bg-blue-950/50
    background-animate text-slate-400 h-full'>
      <div className='min-w-[50%] mt-24 flex flex-col items-center text-center'>
        <h1 className='text-4xl p-2 text-white font-black uppercase'>segurança é 
        <span className='text-4xl font-black gradient-text uppercase'> coisa séria!</span></h1>
        <p className='text-lg font-bold text-gray3 uppercase'>Aqui nossa prioridade é trazer o melhor de segurança que o mercado pode oferecer direto para o seu negócio</p>
        <button className='shadow-cyan-500/50 flex flex-col bg-slate-950 hover:bg-slate-900 text-white font-bold uppercase p-4 rounded-md hover:rounded-xl mt-4 text-sm hover:text-base duration-300 ease-in-out'>SAIBA MAIS</button>
      </div>
      <div className='min-w-[50%] flex flex-col justify-center items-center text-center p-6 h-96'>
        <div className='flex flex-row space-x-10'>
          <div className='relative'>
        <Image className='shadow-cyan-500/50 hover:w-52 duration-500 ease-in-out'src="/house.svg" alt="My SVG file" width={170} height={170}/>
          </div>
        <Image className='hover:w-52 duration-500 ease-in-out' src="/technology.svg" alt="My SVG file" width={170} height={170}/>
        <Image className='hover:w-52 hover:dark:invert-3 duration-500 ease-in-out' src="/vigilant.svg" alt="My SVG file" width={170} height={170}/>
        </div>
      </div>
    </div>
    <div className='m-40 text-center space-y-96 h-96 text-7xl uppercase font-black'>
      <h1>Tecnologia</h1>
      <h1>Segurança</h1>
      <h1>Qualidade</h1>
      <h1>Serviços e facilities</h1>
    </div>
    </div>
    </>
  )
}
