import { IconPerson } from "@/components/atoms/iconPerson";
import { ChevronDown, Code2, Contact, Moon, PlusCircle, Settings, Sun, User } from "lucide-react";
import LogoLetraWhite from '../../../../../public/assets/logoLetraWhite.png';
import Image from "next/image";
import { ControllerContext } from "@/context/ControlleContext";
import { useContext, useState } from "react";
import { useTheme } from "next-themes";
import { SwitchComponent } from "@/components/atoms/switchComponent";
import { Modal } from "../Modal/modal";
import { useRouter } from "next/navigation";
interface MenuMobileProps { }

export function MenuMobile() {
  const { openMenuMobile, setOpenMenuMobile } = useContext(ControllerContext);

  const { theme, setTheme, resolvedTheme } = useTheme();

  const { color } = useContext(ControllerContext)

  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();


  return (
    <>
      {openModal && (<Modal openModal={openModal} setOpenModal={setOpenModal} />)}
      <main
        className={`${resolvedTheme === "dark"
        ? "bg-dark"
        : resolvedTheme === "littleDark"
          ? "bg-littleDark"
          : "bg-light"
      } sm:w-full tablet:[4.688rem] h-full p-4 rounded-t-lg

      `}>
        {/* <header className="flex gap-4">
       
             <Image
              src={LogoLetraWhite}
              width={40}
              height={40}
              alt="Logo letra"
              loading="lazy"
            />
        </header> */}

   
        {/* h-[calc(100%-450px)] */}
        <section className="flex tablet:flex-col tablet:gap-4 justify-between h-[calc(100%-200px)] ">
          <button className="flex gap-4 items-center" onClick={() =>  router.push('/')}>
            <User color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)" : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `} /> 
          </button>
          <button className="flex gap-4 items-center"  onClick={() =>  router.push('/dashboard')}>
            <Settings color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)" : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `} /> 
          </button>
          <button className="flex gap-4 items-center" onClick={() =>  router.push('/habilidades')}>
            <Code2 color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)" : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `} /> 
          </button>
          <button className="flex gap-4 items-center"  onClick={() =>  router.push('/projetos')}>
            <Contact color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)" : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `} /> 
          </button>

          <button className="flex gap-4 items-center" onClick={() => {
            setOpenModal(true);
            // setOpenMenuMobile(true);
          }}>
            <PlusCircle color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `} /> 
          </button>
        </section>

        <footer className="flex justify-around mb-0">


          {/* <SwitchComponent
            onCheckedChange={(checked) => {
              //melhorar essa logica
              // checked ? setTheme('dark') :  setTheme('light')
              console.log({ checked })
              theme === 'dark' ? setTheme('light') : setTheme('dark')


            }}
          /> */}

         
        </footer>
      </main>
    </>
  )
}
