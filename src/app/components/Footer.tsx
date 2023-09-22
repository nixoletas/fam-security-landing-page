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
      <nav className="flex bg-gradient-to-r from-blue-900  to-blue-950 rounded-t-3xl  backdrop-blur-sm  pt-20 mt-10">
        <div className='p-6'>
          <Link href='/'>
            <Image
              className=' ml-2 cursor-pointer duration-300 dark:drop-shadow-[0_0_0.4rem_#000000] hover:scale-110'
              src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png' alt=''
              width={120} height={95} priority={true} />
          </Link>
        </div>
        <div className=''>
        </div>
        <ul className=''>
          <li className=' text-white hover:text-blue-600 hover:font-black duration-200 ease-in-out'>
            <Link href='/' >Home</Link>
          </li>
          <li className=' text-white hover:text-yellow-400 hover:font-black duration-200 ease-in-out'>
            <Link href='/about'>About Us</Link>
          </li>
          <li className=' text-white hover:text-amber-500 hover:font-black duration-200 ease-out'>
            <Link href='/contact'>Contact Us</Link>
          </li>
          <li className=' text-white hover:text-green-600 hover:font-black duration-200 ease-in-out'>
            <Link href='/services'>Services</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
