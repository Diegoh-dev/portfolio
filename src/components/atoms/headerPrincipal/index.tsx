import { useTheme } from "next-themes";
import { IconUser } from "../iconComponents/iconUser";
import Image from "next/image";
import logoPrincipal from "../../../../public/assets/LOGO PRINCIPAL.png";
import logoSegundaria from '../../../../public/assets/logo2.png';
import { ControllerContext } from "@/context/ControlleContext";
import { useContext } from "react";

export function HeaderPrincipal(){
  const { theme, setTheme } = useTheme();
  const {setOpenMenuMobile,openMenuMobile} = useContext(ControllerContext);


  return (
    <header className="flex items-center">
    <button onClick={() => setOpenMenuMobile(true)}>
      <IconUser 
      color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}
      height="40"
      width="40"
      />
    </button>
    {/* 77px */}
    <div className="flex justify-center w-[calc(100%-82px)]">
      <Image 
      src={theme === 'light' ? logoSegundaria : logoPrincipal} 
      width={theme === 'light' ? 199 : 199} 
      alt="logo principal" 
      loading="lazy" 
      />
    </div>
  </header>
  )
}