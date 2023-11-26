"use client";
import { Providers } from "@/components/atoms/providers";
import { MenuDesktop } from "@/components/molecule/components/MenuDesktop";
import { MenuMobile } from "@/components/molecule/components/MenuMobile";
import { ControllerContext } from "@/context/ControlleContext";
// import type { Metadata } from 'next';
import localFont from "next/font/local";
import { useContext } from "react";

const petrov = localFont({
  src: [
    {
      path: "../../public/fonts/PetrovSans-Trial-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PetrovSans-Trial-ExtraLight.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PetrovSans-Trial-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PetrovSans-Trial-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-petrov",
});

const exo = localFont({
  src: [
    {
      path: "../../public/fonts/Exo2-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Exo2-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Exo2-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Exo2-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Exo2-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-exo",
});

// export const metadata: Metadata = {
//   title: 'Diego Dev',
//   description: 'Portfolio',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning={true}
      className={`${petrov.variable} ${exo.variable}`}
    >
      <body className="w-screen	h-screen overflow-hidden	flex">
        <Providers>
          {/* tablet:w-1/3*/}
          <div className="hidden tablet:hidden laptop:w-1/4 sm:block">
            <MenuDesktop />
          </div>
          <div className="laptop:hidden tablet:static absolute  z-10 bottom-0 tablet:[4.688rem] w-full">
            <MenuMobile />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
