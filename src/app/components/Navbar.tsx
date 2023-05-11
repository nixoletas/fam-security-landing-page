import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
    return(
        <>
        <nav className="sticky
        bg-black/50
        w-full
        top-0
        z-50
        flex
        justify-between
        items-center
        blur-backdrop-filter
        p-2">
            <div>
                <Link href='/' replace={true} scroll={true}>
                    <Image
                    className='ml-10 hover:w-36 cursor-pointer duration-300
                    dark:drop-shadow-[0_0_0.4rem_#000000]' 
                    src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png' alt='' 
                    width={130} height={100} priority={true} />
                </Link>
            </div>
            <ul className='flex row text-2xl font-extralight mr-5 space-x-10'>
                <li><Link replace scroll={true} className=' text-white hover:text-red-600 hover:font-black 
                duration-200 ease-in-out' href="/">Home</Link></li>
                <li><Link scroll={true} className=' text-white hover:text-yellow-400 hover:font-black 
                duration-200 ease-in-out ' href="/about">About Us</Link></li>
                <li><Link scroll={true} className=' text-white hover:text-amber-500 hover:font-black 
                duration-200 ease-out ' href="/services">Services</Link></li>
                <li><Link scroll={true} className=' text-white hover:text-green-600 hover:font-black 
                duration-200 ease-in-out ' href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
        </>
    )
}

