import React from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
    return (
        <>
        <Navbar/>
        <section className='text-7xl p-6 text-white h-screen'>
            <div id='contact' className='w-full h-20'></div>
            <h1 className="animate-fade-in-down mb-20">Entre em contato</h1>
            <div className='flex-col justify-center items-center'>
            <h2 className='text-xl'>Alameda Afonso Schmidt, 508
Santa Terezinha São Paulo/SP
CEP 02450-001</h2>
<h2 className='text-xl'>
Telefone: (11) 2959-2079
</h2>
</div>
        </section>
        </>
    )
}