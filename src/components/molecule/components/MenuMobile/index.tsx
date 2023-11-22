import { IconPerson } from "@/components/atoms/iconPerson";
import { ChevronDown, Code2, Contact, Moon, PlusCircle, Settings, Sun, User } from "lucide-react";
import LogoLetraWhite from '../../../../../public/assets/logoLetraWhite.png';
import Image from "next/image";
import { ControllerContext } from "@/context/ControlleContext";
import { useContext, useState } from "react";
import { useTheme } from "next-themes";
import { SwitchComponent } from "@/components/atoms/switchComponent";
import { Modal } from "../Modal/modal";
interface MenuMobileProps {}

export function MenuMobile() {
  const {openMenuMobile,setOpenMenuMobile} = useContext(ControllerContext);

const { theme, setTheme ,resolvedTheme} = useTheme();

const {color} = useContext(ControllerContext)

const [openModal,setOpenModal] = useState(false);


  return (
    <>
      {openModal && (<Modal openModal={openModal} setOpenModal={setOpenModal}/>)}
    <main 
    className={`absolute z-10 ${
              resolvedTheme === "dark"
                ? "bg-dark"
                : resolvedTheme === "littleDark"
                ? "bg-littleDark"
                : "bg-light"
            } w-9/12	h-full p-4`}>
      <header className="flex gap-4">
        <button onClick={() => setOpenMenuMobile(false)}>
          <IconPerson color="var(--color-purple)" height="40" width="40" />
        </button>

        <div>
          <strong>Diego Ribeiro</strong>
          <span className="block">Desenvolvedor Front-End</span>
        </div>
      </header>

      <section className="flex justify-around pb-10 pt-8	border-b-[1px] border-borderLight dark:border-gray mb-8">
        <span>500 Curtidas</span>
        <span>5000 Visualizações</span>
      </section>
      {/* h-[calc(100%-450px)] */}
      <section className="flex flex-col gap-12 h-[calc(100%-200px)]">
        <button className="flex gap-4 items-center">
          <User color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/> Perfil
        </button>
        <button className="flex gap-4 items-center">
          <Settings color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/> Habilidades
        </button>
        <button className="flex gap-4 items-center">
          <Code2 color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/> Projetos
        </button>
        <button className="flex gap-4 items-center">
          <Contact color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/> Contatos
        </button>

        <button className="flex gap-4 items-center" onClick={() => {
          setOpenModal(true);
          // setOpenMenuMobile(true);
          }}>
          <PlusCircle color={`${resolvedTheme === 'light' ? 'hover:bg-hoverLight' : resolvedTheme === 'littleDark' ? 'hover:bg-hoverDark-2' : 'hover:bg-hoverDark'}`}/> Configurações
        </button>
      </section>

      <footer className="flex justify-around mb-0">


     <SwitchComponent 
    onCheckedChange={(checked) => {
      //melhorar essa logica
      // checked ? setTheme('dark') :  setTheme('light')
      console.log({checked})
      theme === 'dark' ? setTheme('light') : setTheme('dark')
    

    }}
     />

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
    </>
  )
}
