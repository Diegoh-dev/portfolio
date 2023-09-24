'use client'
import './globals.css';
import Image from "next/image";
import imageCapa from '../../public/assets/capa.png'

export default function Home() {
  return (
    <main className='max-w-full h-screen relative border border-l-blue'>
      <section className="max-w-full h-2/6 relative">
        {/* imagem back */}
        <Image
        className='max-w-full h-full'
        src={imageCapa}
        // width={200}
        // height={200}
        alt="capa perfil"
        loading="lazy"
        fill={true}
        objectFit='cover'
        />
        portfolio
      </section>
    </main>
  )
}
