import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
    return(
        <>
        <nav className="
        bg-black/50
        w-full
        top-0
        z-50
        flex
        justify-between
        items-center
        blur-backdrop-filter
        p-2 fixed">
            <div>
                <Link href='#home'>
                <Image
                className='ml-10 hover:w-36 cursor-pointer duration-300
                dark:drop-shadow-[0_0_0.4rem_#000000]' 
                src='https://www.famsecurity.com.br/wp-content/uploads/logotipo-1.png' alt='' 
                width={130} height={100} priority={true} />
                </Link>
            </div>
            <ul className='flex row text-2xl font-extralight mr-5 space-x-10'>
                <li className=' text-white hover:text-blue-600 hover:font-black 
                duration-200 ease-in-out'>
                    <Link href='#home' >Home</Link>
                </li>
                <li className=' text-white hover:text-yellow-400 hover:font-black 
                duration-200 ease-in-out'>
                    <Link href='#about'>About Us</Link>
                </li>
                <li className=' text-white hover:text-amber-500 hover:font-black 
                duration-200 ease-out'>
                    <Link href='#contact' scroll={false}>Contact Us</Link>
                </li>
                <li className=' text-white hover:text-green-600 hover:font-black 
                duration-200 ease-in-out'>
                    <Link href='#services'>Services</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

