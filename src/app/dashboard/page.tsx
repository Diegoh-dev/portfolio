"use client";
import "../globals.css";
import { MenuTabs } from "@/components/atoms/menuTabs";
import { useTheme } from "next-themes";
import { HeaderPrincipal } from "@/components/atoms/headerPrincipal";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();
  
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

      <section className="mt-4">
        <MenuTabs />
      </section>

      <button onClick={() => setTheme("light")}>tema light</button>
      <button onClick={() => setTheme("dark")}>tema dark</button>
    </main>
  );
}
