import Image from "next/image";
import { FaSquareFull } from "react-icons/fa"

export const MenuHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-bold text-5xl leading-9 flex gap-1 font-[Helvetica]">
                    Osvaldo
                    <FaSquareFull size={8} className='self-end' />
                </h2>
                <h4 className='text-md font-bold font-[Helvetica] ml-1'>
                    Café de Especialidad.
                </h4>
            </div>

            <Image src={'/logos/logo-icono.jpg'} height={70} width={50} alt='osvaldo-logo' />
        </div>
    )
}
