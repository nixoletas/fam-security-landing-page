import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
    return(
        <>
        <nav className="
        sticky
        bg-clip-padding
        bg-blue-950
        top-0
        flex
        justify-between
        items-center
        blur-backdrop-filter
        p-3
        md:flex md:items-center md:justify-between">
            
            <div>
                <Link href='/'>
                    <Image 
                    className='ml-10 hover:w-36 cursor-pointer duration-300' 
                    src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png' alt='' 
                    width={130} height={100} />
                </Link>
            </div>
            <ul className='flex row text-2xl font-normal space-x-10'>
                <li><Link className=' shadow-cyan-500 hover:shadow-2xl hover:text-sky-900 hover:font-black duration-300 ease-linear' href="/">Home</Link></li>
                <li><Link className=' hover:text-yellow-400 hover:font-black duration-300 ease-linear' href="/about">About Us</Link></li>
                <li><Link className=' hover:text-amber-500 hover:font-black duration-300 ease-linear' href="/services">Services</Link></li>
                <li><Link className=' hover:text-green-600 hover:font-black duration-300 ease-linear' href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
        </>
    )
}

