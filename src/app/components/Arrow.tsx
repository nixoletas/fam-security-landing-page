import Image from 'next/image'

export default function Arrow() {
    return (
        <div className=' dark:drop-shadow-[0_0_0.1rem_#ffffff70] w-full flex animate-bounce align-bottom  justify-center text-center '>
            <Image src='/scroll-down.svg' alt='scroll down' width={50} height={50}/>
        </div>
    )
}