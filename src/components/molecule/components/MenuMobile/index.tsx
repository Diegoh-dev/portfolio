import { IconPerson } from "@/components/atoms/iconPerson";
import { ChevronDown, Code2, Contact, Moon, PlusCircle, Settings, Sun, User } from "lucide-react";
import LogoLetraWhite from '../../../../../public/assets/logoLetraWhite.png';
import Image from "next/image";
import { ControllerContext } from "@/context/ControlleContext";
import { useContext } from "react";
import { useTheme } from "next-themes";
import { SwitchComponent } from "@/components/atoms/switchComponent";
interface MenuMobileProps {}

export function MenuMobile() {
  const {openMenuMobile,setOpenMenuMobile} = useContext(ControllerContext);
  const { resolvedTheme } = useTheme();
//${resolvedTheme === 'dark' ? 'bg-dark' : 'bg-light'}
  console.log({resolvedTheme})
  return (
    <main className={`absolute z-10 bg-light dark:bg-dark w-9/12	h-full p-4`}>
      <header className="flex gap-4">
        <button onClick={()=> setOpenMenuMobile(false)}>
          <IconPerson color="var(--color-purple)" height="40" width="40" />
        </button>

        <div>
          <strong>Diego Ribeiro</strong>
          <span className="block">Desenvolvedor Front-End</span>
        </div>
      </header>

      <section className="flex justify-around pb-10 pt-8	border-b-[1px] border-gray mb-8">
        <span>500 Curtidas</span>
        <span>5000 Visualizações</span>
      </section>
      {/* h-[calc(100%-450px)] */}
      <section className="flex flex-col gap-12 h-[calc(100%-200px)]">
        <button className="flex gap-4 items-center">
          <User /> Perfil
        </button>
        <button className="flex gap-4 items-center">
          <Settings /> Habilidades
        </button>
        <button className="flex gap-4 items-center">
          <Code2 /> Projetos
        </button>
        <button className="flex gap-4 items-center">
          <Contact /> Contatos
        </button>

        <button className="flex gap-4 items-center">
        <PlusCircle /> Mais 
        </button>
      </section>

      <footer className="flex justify-around mb-0">

     <SwitchComponent/>

       <div >
       <Image
          src={LogoLetraWhite}
          width={40}
          height={40}
          alt="Logo letra"
          loading="lazy"
        />
       </div>
      </footer>
    </main>
  );
}
