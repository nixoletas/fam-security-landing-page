'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex w-screen bg-gradient-to-r from-blue-900  to-blue-950  backdrop-blur-sm  py-10">
        <div className='max-sm:hidden items-center px-4'>
          <Link href='/'>
            <Image
              className='ml-2 cursor-pointer duration-300 dark:drop-shadow-[0_0_0.4rem_#000000] hover:scale-110'
              src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png' alt=''
              width={120} height={95} priority={true} />
          </Link>
        </div>
        <div className='max-sm:py-6 p-4'>
        </div>
        <div className='flex absolute right-4'>
        <ul className='text-center text-xl flex flex-col justify-center px-4'>
          <li className=' text-white hover:text-blue-600 hover:font-black duration-200 ease-in-out'>
            <Link href='/' ><i className="fa-solid fa-house"></i></Link>
          </li>
          <li className=' text-white hover:text-yellow-400 hover:font-black duration-200 ease-in-out'>
            <Link href='/about'><i className="fa-solid fa-info"></i></Link>
          </li>
          <li className=' text-white hover:text-amber-500 hover:font-black duration-200 ease-out'>
            <Link href='/contact'><i className="fa-solid fa-phone"></i></Link>
          </li>
        </ul>

        <div>
        <h2 className='text-sm flex justify-end text-right text-cyan-200'>
            Alameda Afonso Schmidt, 508
            Santa Terezinha. <br></br> São Paulo/SP
            CEP 02450-001. <br></br>
            Telefone: (11) 2959-2079
          </h2>
        </div>
        </div>
      </nav>
    </>
  )
}