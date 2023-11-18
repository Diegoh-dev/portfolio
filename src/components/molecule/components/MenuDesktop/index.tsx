import { useTheme } from "next-themes";
import Image from "next/image";
import logoSegundaria from '../../../../../public/assets/logoSegundaria.png';
import logoPrincipal from '../../../../../public/assets/LOGO PRINCIPAL.png';
import LogoLetraWhite from '../../../../../public/assets/logoLetraWhite.png';
import LogoLetra from '../../../../../public/assets/logoLetra.png';

import { Code2, Contact, LayoutDashboard, PlusCircle, Settings, User } from "lucide-react";
import { SwitchComponent } from "@/components/atoms/switchComponent";
import {useRouter} from 'next/navigation';
import { Modal } from "../Modal/modal";
import { useState } from "react";
export function MenuDesktop(){
  const { theme, setTheme ,resolvedTheme} = useTheme();
  const router = useRouter();

  const [openModal,setOpenModal] = useState(false);
  return (
    <>
    {openModal && (<Modal openModal={openModal} setOpenModal={setOpenModal}/>)}
    
    <div className={`${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'} py-4 px-12 flex flex-col justify-around h-full border-r-[1px]`}>
      <header className="flex justify-center items-center">
        <Image
          src={theme === "light" ? logoSegundaria : logoPrincipal}
          width={theme === "light" ? 199 : 199}
          alt="logo principal"
          loading="lazy"
        />
      </header>

      {/* componentizar  | border: pouco black:#38444d*/}
      <section className="flex flex-col gap-[1.2rem] text-xl h-[calc(100%-200px)]">
        <button className={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'} p-3 flex gap-4 items-center hover:rounded-full active:font-bold focus:font-bold`} onClick={() =>  router.push('/')}>
          <User color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Perfil
        </button>
        <button className={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'} p-3 flex gap-4 items-center  hover:rounded-full  active:font-bold focus:font-bold`}  onClick={() =>  router.push('/dashboard')}>
          <LayoutDashboard color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Dashboard
        </button>
        <button className={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'} p-3 flex gap-4 items-center  hover:rounded-full  active:font-bold focus:font-bold`}  onClick={() =>  router.push('/habilidades')}>
          <Settings color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Habilidades
        </button>
        <button className={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'} p-3 flex gap-4 items-center  hover:rounded-full  active:font-bold focus:font-bold`}  onClick={() =>  router.push('/projetos')}>
          <Code2 color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Projetos
        </button>
        <button className={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'} p-3 flex gap-4 items-center  hover:rounded-full  active:font-bold focus:font-bold`} >
          <Contact color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Contatos
        </button>

        <button className={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'} p-3 flex gap-4 items-center hover:rounded-full  active:font-bold focus:font-bold`} onClick={() => setOpenModal(true)} >
          <PlusCircle color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Configurações
        </button>
      </section>

      <footer className="flex justify-end mb-0">
        {/* <SwitchComponent
          onCheckedChange={(checked) => {
            //melhorar essa logica
            // checked ? setTheme('dark') :  setTheme('light')
            console.log({ checked });
            theme === "dark" ? setTheme("littleDark") : setTheme("dark");
            console.log({theme})
            console.log({['data-theme']:document.documentElement.getAttribute('data-theme')})
          }}
        /> */}

        <div>
          <Image
            src={theme === "light" ? LogoLetra : LogoLetraWhite}
            width={40}
            height={40}
            alt="Logo letra"
            loading="lazy"
          />
        </div>
      </footer>
    </div>
    </>
  );
}