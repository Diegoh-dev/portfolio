import { IconUser } from "@/components/atoms/iconComponents/iconUser";
import Image from "next/image";
import logoPrincipal from '../../../public/assets/LOGO PRINCIPAL.png';
import "../globals.css";

export default function Dashboard() {
  return (
    <main className="p-3">
      <header className="flex items-center">
        <div>
          <IconUser color="var(--color-purple)" />
        </div>

        <div className="">
        <Image
          src={logoPrincipal}
          alt="logo principal"
          loading="lazy"
        />
        </div>
      </header>
    </main>
  )
}
