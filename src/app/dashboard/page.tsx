"use client";
import "../globals.css";
import { MenuTabs } from "@/components/atoms/menuTabs";
import { useTheme } from "next-themes";
import { HeaderPrincipal } from "@/components/atoms/headerPrincipal";
import { useContext, useEffect, useState } from "react";
import { MenuMobile } from "@/components/molecule/components/MenuMobile";
import { ControllerContext } from "@/context/ControlleContext";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();

  const {openMenuMobile} = useContext(ControllerContext);
  
  const [mounted,setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }

  return (
    <main className="p-3">
      <HeaderPrincipal />

      {openMenuMobile && (<MenuMobile/>)}
      

      <section className="mt-4">
        <MenuTabs />
      </section>

      <button onClick={() => setTheme("light")}>tema light</button>
      <button onClick={() => setTheme("dark")}>tema dark</button>
    </main>
  );
}
