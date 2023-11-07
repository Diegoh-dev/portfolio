import { useTheme } from "next-themes";
import Image from "next/image";
import logoSegundaria from '../../../../../public/assets/logoSegundaria.png';
import logoPrincipal from '../../../../../public/assets/LOGO PRINCIPAL.png';
import LogoLetraWhite from '../../../../../public/assets/logoLetraWhite.png';
import LogoLetra from '../../../../../public/assets/logoLetra.png';

import { Code2, Contact, LayoutDashboard, PlusCircle, Settings, User } from "lucide-react";
import { SwitchComponent } from "@/components/atoms/switchComponent";
import {useRouter} from 'next/navigation';
export function MenuDesktop(){
  const { theme, setTheme } = useTheme();
  const router = useRouter()
  return (
    <div className="p-4 flex flex-col justify-around h-full border-r-[1px] border-gray">
      <header className="flex justify-center items-center">
        <Image
          src={theme === "light" ? logoSegundaria : logoPrincipal}
          width={theme === "light" ? 199 : 199}
          alt="logo principal"
          loading="lazy"
        />
      </header>

      {/* componentizar */}
      <section className="flex flex-col gap-12 h-[calc(100%-200px)]">
        <button className="flex gap-4 items-center" onClick={() =>  router.push('/')}>
          <User color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Perfil
        </button>
        <button className="flex gap-4 items-center" onClick={() =>  router.push('/dashboard')}>
          <LayoutDashboard color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Dashboard
        </button>
        <button className="flex gap-4 items-center">
          <Settings color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Habilidades
        </button>
        <button className="flex gap-4 items-center">
          <Code2 color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Projetos
        </button>
        <button className="flex gap-4 items-center">
          <Contact color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Contatos
        </button>

        <button className="flex gap-4 items-center">
          <PlusCircle color={`${theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}`}/> Configurações
        </button>
      </section>

      <footer className="flex justify-around mb-0">
        <SwitchComponent
          onCheckedChange={(checked) => {
            //melhorar essa logica
            // checked ? setTheme('dark') :  setTheme('light')
            console.log({ checked });
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        />

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
  );
}