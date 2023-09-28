'use client'

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  // Define state variables for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here
    // For this example, we'll just log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  const [isCopied, setIsCopied] = useState(false); 

  const copyEmailToClipboard = () => {
    const emailElement = document.createElement('textarea');
    emailElement.value = 'contato@famsecurity.com.br';
    document.body.appendChild(emailElement);
    emailElement.select();
    document.execCommand('copy');
    document.body.removeChild(emailElement);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    
      <Navbar />
      <section className='text-7xl px-6 text-white'>
        <div id='contact' className='w-full h-24'></div>
        <h1 className='animate-fade-in-down mb-16'>Entre em contato</h1>
        <div className='flex-col justify-center items-center'>
          <h2 className='text-xl'>
            Alameda Afonso Schmidt, 508
            Santa Terezinha. <br></br> São Paulo/SP
            CEP 02450-001.
          </h2>
          <h2 className='text-xl'>Telefone: (11) 2959-2079</h2>
          <p className='text-lg font-semibold font-FiraCode text-amber-400 '><span
            onClick={copyEmailToClipboard}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >contato@famsecurity.com.br</span></p>

          {/* Notification */}
        {isCopied && (
          <div className='bg-green-500 p-2 w-24 text-xs text-white rounded-md '>
            Email copiado
          </div>
        )}

          <div>
            <a href="https://api.whatsapp.com/send?phone=5511989184515">
          <button className=' shadow-cyan-500/50 flex gap-2 
        bg-blue-950 text-white font-bold uppercase p-4 rounded-md hover:rounded-xl mt-8 
          text-sm hover:text-base animate-pulse duration-300 ease-in-out '>WHATSAPP<i className="fa-brands fa-whatsapp text-xl"></i></button></a></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='max-w-screen-sm mt-4 text-white text-xl'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-xl text-white'>
                Nome:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='uppercase bg-gradient-to-r from-cyan-950 to-blue-800 w-full p-2 rounded-md border border-gray-400'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-xl text-white'>
                E-mail:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='lowercase bg-gradient-to-r from-cyan-950 to-blue-800 w-full p-2 rounded-md border border-gray-400'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-xl text-white'>
                Mensagem:
              </label>
              <textarea spellCheck="false"
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='bg-gradient-to-r from-cyan-950 to-blue-800 w-full p-2 rounded-md border border-gray-400'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 mb-12 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600'
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
}
