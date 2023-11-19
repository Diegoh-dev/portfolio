"use client"
import "./globals.css";
import Image from "next/image";
import imageCapa from "../../public/assets/capa-portfolio.png";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import { PartyPopper, User2 } from "lucide-react";
import { IconUser } from "@/components/atoms/iconComponents/iconUser";
import LogoLetraWhite from '../../public/assets/logoLetraWhite.png';
import { ControllerContext } from "@/context/ControlleContext";

export default function Home() {
  const [mounted,setMounted] = useState(false);
  const {theme,setTheme} = useTheme();
  const {color} = useContext(ControllerContext);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }

  return (
    // max-w-full 
    <main className="tablet:w-2/3	laptop:w-3/4 h-screen relative">
      <section className="max-w-full h-[37.333333%] relative">
        {/* h-2/6 */}
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
        <span className="text-sm tracking-wide">Desenvolvedor Web & Mobile</span>
        <span className="text-sm tracking-wide flex gap-3">
        <PartyPopper size={18} color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/>
          Nascido em 16 de agosto de 1999
          </span>
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
