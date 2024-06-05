"use client"
import Image from "next/image"

export const Logo = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='w-[85%] flex justify-center items-center imagen-animada'>
                <Image
                    src={'/logos/osvaldo-logo.jpg'}
                    alt={'osvaldo-logo'}
                    width={320}
                    height={320}
                    priority
                />
            </div>
        </div>
    )
}
