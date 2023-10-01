"use client";
import "../globals.css";
import { MenuTabs } from "@/components/atoms/menuTabs";
import { useTheme } from "next-themes";
import { HeaderPrincipal } from "@/components/atoms/headerPrincipal";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();

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
