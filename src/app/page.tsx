import Navbar from './components/Navbar'
import Image from 'next/image'
import facilities from '../public/icons/facilities.svg'
import { ReactComponent as MySvg } from './my-svg-file.svg';


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='
    flex flex-col md:flex-row
    bg-gradient-to-r
    from-black
    to-blue-900
    background-animate text-slate-400'>
      <div className='min-w-[50%] flex flex-col justify-center items-center text-center p-6'>
        <h1 className='text-4xl text-white font-black uppercase'>nós não brincamos com</h1>
        <h1 className='text-4xl font-black gradient-text uppercase'>coisa séria</h1>
        <p className='text-lg font-bold text-gray3 uppercase'>Aqui nossa prioridade é trazer o melhor de segurança que o mercado pode oferecer direto para o seu negócio</p>
      </div>
      <div className='min-w-[50%] flex flex-col justify-center items-center text-center p-6 h-96'>
        <Image src={facilities} alt='' width={300} height={300} />
        </div>
    </div>
    </>
  )
}
