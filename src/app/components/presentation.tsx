import Image from 'next/image'

export default function Presentation() {
    return (
        <>
        <div id='presentation' className='w-full h-12'></div>
        <div className='dark:drop-shadow-[0_0_0.1rem_#ffffff70] mb-4  w-full flex animate-bounce align-top justify-center text-center'>
      <Image src='/scroll-down.svg' alt='scroll down' width={50} height={50}/>
    </div>
    <section className='flex justify-center items-center text-center'>
    <div className=' text-white text-center h-96 text-7xl uppercase font-black'>
      <h1 className='text-4xl font-semibold mb-10'>por que confiar na FAM Security?</h1>
      <p className='text-2xl dark:drop-shadow-[0_0_0.1rem_#000000] font-semibold mb-6'>porque temos:</p>
      <div className='dark:drop-shadow-[0_0_0.1rem_#ffffff70]  space-y-2 font-semibold text-center  text-3xl gradient-yellow flex-auto'>
        <h1>Qualidade</h1>
        <h1>Experiência</h1>
        <h1>Profissionalismo</h1>
        <h1>Comprometimento</h1>
        <h1>Agilidade</h1>
        <h1>Transparência</h1>
      </div>
    </div>
    <div className='dark:drop-shadow-[0_0_0.1rem_#ffffff70]  mb-4  w-full flex align-top justify-center text-center'>
      <Image className='p-2 'src='https://www.famsecurity.com.br/wp-content/uploads/6447454b-b949-49f1-9d0c-2eef240e8615.jpg' alt='scroll down' width={350} height={350}/>
    </div>
      </section>
      </>
    )
}