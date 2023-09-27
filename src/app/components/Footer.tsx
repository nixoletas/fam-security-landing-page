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
      <nav className="h-32 w-screen bg-gradient-to-r from-blue-900  to-blue-950  backdrop-blur-sm">

        <div className='h-32 flex gap-6 items-center justify-center'>
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
