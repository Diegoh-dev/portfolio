"use client"
import "./globals.css"
import Image from "next/image"
import imageCapa from "../../public/assets/capa.png"

export default function Home() {
  return (
    <main className="max-w-full h-screen relative">
      <section className="max-w-full h-2/6 relative">
        <Image
          className="max-w-full h-full"
          src={imageCapa}
          alt="capa perfil"
          loading="lazy"
          fill={true}
          objectFit="cover"
        />
        portfolio
      </section>

    {/* foto de perfil */}
      <article>

      </article>


      <section>
        <p>Diego Ribeiro</p>
        <span>Desenvolvedor Front-End</span>
      </section>
    </main>
  )
}
