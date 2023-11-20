"use client";
import "../globals.css";
import { MenuTabs } from "@/components/atoms/menuTabs";
import { useTheme } from "next-themes";
import { HeaderPrincipal } from "@/components/atoms/headerPrincipal";
import { useContext, useEffect, useState } from "react";
import { MenuMobile } from "@/components/molecule/components/MenuMobile";
import { ControllerContext } from "@/context/ControlleContext";
import { MenuDesktop } from "@/components/molecule/components/MenuDesktop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Dashboard() {
  const { theme, setTheme } = useTheme();

  const { openMenuMobile, setOpenMenuMobile } = useContext(ControllerContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      
      <div className="tablet:flex tablet:w-2/3 laptop:w-3/4 h-screen	">
        <div className="tablet:hidden">{openMenuMobile && <MenuMobile />}</div>

        {/* <div className="hidden tablet:w-1/3	laptop:w-1/4 sm:block">
        <MenuDesktop />
      </div> */}
        {/* tablet:w-2/3	laptop:w-3/4 */}
        <main className="p-3 w-full h-full overscroll-auto	overflow-auto ">
          <HeaderPrincipal />

          <section className="mt-4">
            <MenuTabs />
          </section>
        </main>
      </div>
    </>
  );
}
