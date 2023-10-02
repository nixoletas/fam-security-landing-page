'use client'

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('entry.1563745019', name);
      formData.append('entry.606401615', email);
      formData.append('entry.2077698595', message);
  
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdENtwEoOcqQYe2Ip5joDJlwZN-_HbU_QGsoSagg2kw3SXJRg/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
  
      if (response.ok) {
        
      } else {
        setFormSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      setFormError('Falha ao enviar o formulário. Pro favor, tente novamente.');
    }
  };

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
      <div className='content-container'>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <Navbar />

        <section className='text-7xl px-6 text-white'>
          <div id='contact' className='w-full h-24'></div>
          <h1 className='animate-fade-in-down mb-16'>Entre em contato</h1>
          <div className='flex-col justify-center items-center'>
            <h2 className='text-xl'>
              Alameda Afonso Schmidt, 508 Santa Terezinha. <br></br> São
              Paulo/SP CEP 02450-001.
            </h2>
            <h2 className='text-xl'>Telefone: (11) 2959-2079</h2>
            <p className='text-lg font-semibold font-FiraCode text-amber-400 '>
              <span
                onClick={copyEmailToClipboard}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                contato@famsecurity.com.br
              </span>
            </p>

            {isCopied && (
              <div className='bg-green-500 p-2 w-24 text-xs text-white rounded-md '>
                Email copiado
              </div>
            )}

            {!formSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className='max-w-screen-sm h-screen mt-4 text-white text-xl'
              >
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
                  <label
                    htmlFor='message'
                    className='block text-xl text-white'
                  >
                    Mensagem:
                  </label>
                  <textarea
                    spellCheck="false"
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
            ) : (
              <div className='flex h-screen mt-12 text-2xl font-semibold text-green-500'>Formulário enviado!</div>
            )}

            {formError && <div className='text-red-500'>{formError}</div>}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
