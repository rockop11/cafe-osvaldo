import { FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"


export const Footer = () => {
    return (
        <footer className="text-center py-8 bg-zinc-900 text-zinc-200">
            <div className="mb-4">
                {/* <img src="/logo.png" alt="Cafetería de Especialidad" className="w-24 mx-auto" /> */}
            </div>
            <div className="mb-4">
                <p className="mb-1">Céspedes 2495 | Belgrano | CABA</p>
                <p className="mb-1">011-53275633</p>
            </div>
            <div className="mb-4">
                <p className="mb-1">Lunes a sábados de 08:00 a 20:00</p>
                <p className="mb-1">Somos Pet Friendly</p>
            </div>
            <div className="mb-4 flex justify-center space-x-4">

                <a href="https://www.instagram.com/osvaldocafe__/" target='_blank' className='flex flex-col justify-center items-center'>
                    <IoLogoInstagram fontSize={25} />
                </a>

                <a href="https://maps.app.goo.gl/ghw9wsoSLRKdixq17" target='_blank'>
                    <FaMapMarkerAlt size={25} />
                </a>
            </div>
        </footer>
    )
}
