import { useTheme } from "next-themes";
import { IconUser } from "../iconComponents/iconUser";
import Image from "next/image";
import logoPrincipal from "../../../../public/assets/LOGO PRINCIPAL.png";
import logoSegundaria from '../../../../public/assets/logoSegundaria.png';

export function HeaderPrincipal(){
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center">
    <div>
      <IconUser color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"} />
    </div>
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