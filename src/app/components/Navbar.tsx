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

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const animatedElement = document.querySelector(".nav");
      
      if (animatedElement) {
        animatedElement.classList.remove("nav.animate");
      }
    });
  })

  return (
    <>
      <nav id="" className=' bg-black/50 w-full top-0 z-50 flex justify-between items-center blur-backdrop-filter p-2 fixed navbar-enter-active'
      >
        <div>
          <Link href='/'>
            <Image
              className='ml-2 cursor-pointer duration-300 dark:drop-shadow-[0_0_0.4rem_#000000] hover:scale-110'
              src='/logotipo-1.png'
              alt='Logo'
              width={120}
              height={57}
              priority={false}
            />
          </Link>
        </div>

        <div className=' md:hidden lg:hidden xl:hidden justify-end'>
          <button
            onClick={toggleMenu}
            className='text-white text-3xl p-2 flex text-right justify-end focus:outline-none'
          >
            ☰
          </button>
        </div>

        <ul className='hidden md:flex lg:flex text-xl space-x-4 pr-6'>
          <li className=' text-white hover:text-blue-600 hover:font-black duration-200 ease-in-out'>
            <Link href='/' scroll={true}>Home</Link>
          </li>
          <li className=' text-white hover:text-yellow-400 hover:font-black duration-200 ease-in-out'>
            <Link href="/about" scroll={true}>Sobre nós</Link>
          </li>
          <li className=' text-white hover:text-amber-500 hover:font-black duration-200 ease-out'>
            <Link href='/contact' scroll={true}>Contate-nos</Link>
          </li>
        </ul>

        <ul className={`md:hidden min-xl:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <li className=' text-white hover:text-blue-600 hover:font-black duration-200 ease-in-out'>
            <Link href='/' scroll={true}>Home</Link>
          </li>
          <li className=' text-white hover:text-yellow-400 hover:font-black duration-200 ease-in-out'>
            <Link href='/about' scroll={true}>Sobre nós</Link>
          </li>
          <li className=' text-white hover:text-amber-500 hover:font-black duration-200 ease-out'>
            <Link href='/contact' scroll={true}>Contate-nos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
