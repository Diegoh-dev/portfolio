"use client"
import "./globals.css";
import Image from "next/image";
import imageCapa from "../../public/assets/capa.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { User2 } from "lucide-react";
import { IconUser } from "@/components/atoms/iconComponents/iconUser";
import LogoLetraWhite from '../../public/assets/logoLetraWhite.png';

export default function Home() {
  const [mounted,setMounted] = useState(false);
  const {theme,setTheme} = useTheme();
  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }

  return (
    // max-w-full 
    <main className="tablet:w-2/3	laptop:w-3/4 h-screen relative">
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
      <article className="absolute ml-8 my-[-32px]">
        <IconUser 
         color="var(--color-purple)"
         height="50"
         width="50"
         />
      </article>

      <section className="py-10 pr-8 pb-2 pl-8">
        <p className="text-lg font-petrov font-bold tracking-wider">
          Diego Ribeiro
        </p>
        <span className="text-sm tracking-wide">Desenvolvedor Front-End</span>
      </section>

      <section className="p-8">
        <p className="font-exo tracking-wider">
          Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
          JavaScript, TypeScript, Styled Components, Material UI e consumo de
          APIs REST. Apaixonado pelo desenvolvimento de componentes
          reutilizáveis. Também possui experiência em projetos gerenciados por
          Metodologias Ágeis. Formado em Sistemas de Informação e cursando
          Especialização em Front-End na Digital House Brasil.
        </p>
      </section>

      {/* <footer className="p-8 absolute bottom-0">
        <Image
          src={LogoLetraWhite}
          width={50}
          height={50}
          alt="Logo letra"
          loading="lazy"
        />
      </footer> */}
    </main>
  )
}
