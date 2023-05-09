import Link from 'next/link'
import Image from 'next/image'
import style from './Navbar.module.css'

export default function Navbar(){
    return(
        <>
        <nav className="
        bg-blue-900/10
        p-5

        md:flex md:items-center md:justify-between">
            <div>
                <Link href='/'>
                    <Image 
                    className='ml-10 hover:w-36 cursor-pointer hover:opacity-80 duration-300' 
                    src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png' alt='' 
                    width={130} height={100} />
                </Link>
            </div>
            <ul className='flex row text-2xl font-normal space-x-10'>
                <li><Link className=' hover:text-sky-900 hover:font-bold duration-300' href="/">Home</Link></li>
                <li><Link className=' hover:text-yellow-400 hover:font-bold duration-300' href="/about">About Us</Link></li>
                <li><Link className=' hover:text-amber-500 hover:font-bold duration-300' href="/services">Services</Link></li>
                <li><Link className=' hover:text-green-600 hover:font-bold duration-300' href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
        </>
    )
}

