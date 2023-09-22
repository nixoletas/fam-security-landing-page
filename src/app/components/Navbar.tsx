'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Add click event listener to document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef} // Reference to the navbar element
        className="
          bg-black/50
          w-full
          top-0
          z-0
          flex
          justify-between
          items-center
          blur-backdrop-filter
          p-2 fixed"
      >
        <div>
          <Link href='/'>
            <Image
              className='ml-2 cursor-pointer duration-300 dark:drop-shadow-[0_0_0.4rem_#000000] hover:scale-110'
              src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png'
              alt=''
              width={120}
              height={95}
              priority={true}
            />
          </Link>
        </div>
        <div className='min-md:hidden justify-end'>
          <button
            onClick={toggleMenu}
            className='text-white text-3xl p-2 flex text-right justify-end focus:outline-none'
          >
            ☰
          </button>
        </div>
        <ul className={`min-xl:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <li className=' text-white hover:text-blue-600 hover:font-black duration-200 ease-in-out'>
            <Link href='/'>Home</Link>
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
  );
}
