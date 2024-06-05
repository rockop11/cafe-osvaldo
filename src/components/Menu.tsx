'use client'
import Image from "next/image"
import Link from "next/link"
import { FaSquareFull } from "react-icons/fa"

export const Menu = () => {

    return (
        <div className='flex flex-col gap-8'>
            <div className='h-[420px] w-full overflow-hidden relative'>
                <div
                    className='bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                    <Link
                        href="/menu"
                        className='text-white block p-4 text-2xl font-bold'
                        >
                        /Menú
                    </Link>
                </div>
                <Image src={'/images/granos-menu.jpg'} alt={'fondo menu'} fill objectFit='cover' priority />
            </div>

            <div
                className='flex flex-col justify-center items-center gap-4 w-full h-[420px]'>
                <h1 className="font-bold text-5xl leading-9 flex gap-1 font-[Helvetica] tracking-[-2px]">
                    Osvaldo
                    <FaSquareFull size={8} className='self-end' />
                </h1>
                <h4 className='text-xl font-bold font-[Helvetica]'>
                    Café de especialidad
                </h4>
            </div>
        </div>
    )
}
