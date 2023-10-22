import { IconPerson } from "@/components/atoms/iconPerson";
import { ChevronDown, Code2, Contact, Moon, PlusCircle, Settings, Sun, User } from "lucide-react";

interface MenuMobileProps {}

export function MenuMobile() {
  return (
    <main className="absolute z-10 bg-purple w-9/12	h-full p-2	">
      <header className="flex gap-4">
        <div>
          <IconPerson color="var(--color-purple)" height="40" width="40" />
        </div>

        <div>
          <strong>Diego Ribeiro</strong>
          <span className="block">Desenvolvedor Front-End</span>
        </div>
      </header>

      <section className="flex justify-around py-4	border-b-[1px] border-gray mb-4">
        <span>500 Curtidas</span>
        <span>5000 Visualizações</span>
      </section>

      <section className="flex flex-col gap-5">
        <button className="flex gap-2 justify-center items-center">
          <User /> Perfil
        </button>
        <button className="flex gap-2 justify-center items-center">
          <Settings /> Habilidades
        </button>
        <button className="flex gap-2 justify-center items-center">
          <Code2 /> Projetos
        </button>
        <button className="flex gap-2 justify-center items-center">
          <Contact /> Contatos
        </button>

        <button className="flex gap-2 justify-center items-center">
        <PlusCircle /> Mais 
        </button>
      </section>

      <footer>
        <button>
        <Sun />
        {/* <Moon /> */}
        </button>
      </footer>
    </main>
  );
}
