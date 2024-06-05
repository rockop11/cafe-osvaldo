import type { Metadata } from 'next'
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Osvaldo Café',
  description: 'Cafetería, café de especialidad, belgrano, café',
}

export default async function Home() {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='w-full md:max-w-[768px]'>
          {/* Logo Osvaldo */}
          <Logo />

          {/* Menu / Info */}
          <Menu />

          {/* Imagen Cafe / Wifi */}
          <div className='mb-20'>
            <div className='mb-20 relative w-full h-[420px]'>
              <Image src={"/images/osvaldo-mesa.jpg"} alt='osvaldo-cafe' fill objectFit='cover' priority />
            </div>


            <div className='w-full p-10 bg-black'>
              <h3 className='text-white font-bold'>/WIFI</h3>
              <p className='text-white'>OsvaldoCafe</p>
              <p className='text-white'>ovg12495</p>
            </div>
          </div>

          {/* Imagen Negocio */}
          <div className="relative w-full h-[420px] flex items-center justify-center bg-gray-800 my-20">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
              <Image
                src={'/images/bar-osvaldo.jpg'}
                alt="Darkened Background"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            {/* Capa semi-transparente */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          </div>

          {/* Osvaldo Cartel */}
          <div className='my-20 w-full h-[260px] relative'>
            <Image src={'/images/osvaldo-cartel.jpg'} alt='osvaldo-cartel' fill objectFit='cover' />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
