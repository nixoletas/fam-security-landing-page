import Image from 'next/image'

export default function Presentation() {
    return (
        <>
        <div id="presentation" className='dark:drop-shadow-[0_0_0.1rem_#ffffff70] -mt-12 mb-20  w-full flex animate-bounce align-top justify-center text-center'>
      <Image src='/scroll-down.svg' alt='scroll down' width={50} height={50}/>
    </div>
    <section className='flex flex-col justify-center items-center text-center'>
    <div className=' text-white text-center space-y-96 h-96 text-7xl uppercase font-black'>
      <h1 className='text-4xl font-semibold '>por que confiar na FAM Security?</h1>
      <h1>Segurança</h1>
      <h1>Parceria</h1>
      <h1>Confiança</h1>
    </div>
      </section>
      </>
    )
}