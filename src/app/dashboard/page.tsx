"use client";
import { IconUser } from "@/components/atoms/iconComponents/iconUser";
import Image from "next/image";
import logoPrincipal from "../../../public/assets/LOGO PRINCIPAL.png";
import logoSegundaria from '../../../public/assets/logoSegundaria.png';
import "../globals.css";
import * as Tabs from "@radix-ui/react-tabs";
import { Box, Text } from "@radix-ui/themes";
import { MenuTabs } from "@/components/atoms/menuTabs";
import { useTheme } from "next-themes";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="p-3">
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

      <section className="mt-4">
      <MenuTabs/>
      </section>

    <button onClick={() => setTheme('light')}>
      tema light
    </button>
    <button onClick={() => setTheme('dark')}>
      tema dark
    </button>
    </main>
  );
}
