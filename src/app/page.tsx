"use client"
import "./globals.css";
import Image from "next/image";
import imageCapa from "../../public/assets/capa-portfolio.png";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import { GraduationCap, PartyPopper, User2 } from "lucide-react";
import { IconUser } from "@/components/atoms/iconComponents/iconUser";
import LogoLetraWhite from '../../public/assets/logoLetraWhite.png';
import { ControllerContext } from "@/context/ControlleContext";

export default function Home() {
  const [mounted,setMounted] = useState(false);
  const {theme,setTheme,resolvedTheme} = useTheme();
  const {color} = useContext(ControllerContext);

  useEffect(()=>{
    setMounted(true);
  },[]);

  // var ultimaPosicao = 0;

  // function rolar() {
  //         var atualPosicao = window.scrollY;
  
  //         if(atualPosicao > ultimaPosicao) {
  //             console.log('↓↓↓')
  //         } else {
  //             console.log('↑↑↑');
  //         }
  
  //         ultimaPosicao = atualPosicao;
  //     }
  // document.addEventListener('scroll', rolar);

  console.log(window.scrollY)

  if(!mounted){
    return null;
  }


  return (
    // max-w-full 
    <main className="tablet:w-full laptop:w-[77%]	desktop:w-[77%] 2xl:w-[77%] sm:h-[calc(100dvh-57px)] h-screen   relative overflow-auto	">
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
        <span className={ `${
              resolvedTheme === "light"
                ? "text-colorLabel-1"
                : resolvedTheme === "littleDark"
                ? "text-colorLabel-2"
                : "text-colorLabel-3"
            } text-sm tracking-wide flex gap-3` }>
        <PartyPopper size={18} color={`${
              resolvedTheme === "light"
                ? "var(--colorLabel-1)"
                : resolvedTheme === "littleDark"
                ? "var(--colorLabel-2)"
                : "var(--colorLabel-3)"
            }`}/>
          Nascido em 16 de agosto de 1999
          </span>
        <span className={ `${
              resolvedTheme === "light"
                ? "text-colorLabel-1"
                : resolvedTheme === "littleDark"
                ? "text-colorLabel-2"
                : "text-colorLabel-3"
            } text-sm tracking-wide flex gap-3` }>
        <GraduationCap size={18} color={`${
              resolvedTheme === "light"
                ? "var(--colorLabel-1)"
                : resolvedTheme === "littleDark"
                ? "var(--colorLabel-2)"
                : "var(--colorLabel-3)"
            }`}/>
          Análise e Desenvolvimento de Sistemas
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
