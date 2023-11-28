import { ControllerContext } from "@/context/ControlleContext";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useContext } from "react";

export function FooterComponent(){

    const { resolvedTheme } = useTheme();

    const {color} = useContext(ControllerContext);

    return (
      <footer className="flex items-center flex-col h-64 p-5">
        <div className="pb-4 w-full flex items-center flex-col ">
          <h3 className="text-xl">VAMOS CONSTRUIR ALGO JUNTOS?</h3>
          <p>
            Se você tem algum projeto em mente, sinta-se à vontade para me
            enviar uma mensagem.
          </p>
        </div>

        <article
          className={`
           rounded-[22px] flex items-center justify-center gap-4 w-3/4`}
        >
          <Link href={"https://www.linkedin.com/in/diego-costa-dev/"} target="_blank" className={`${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'} border-[1px] p-2 rounded-lg`}>
          <Linkedin
            color={`${
              color === "blue"
                ? "var(--color-blue)"
                : color === "purple"
                ? "var(--color-purple)"
                : color === "yellow"
                ? "var(--color-yellow)"
                : color === "orange"
                ? "var(--color-orange)"
                : color === "green"
                ? "var(--color-green)"
                : "var(--color-pink)"
            } `}
          />

          </Link>

         <Link href={"https://www.instagram.com/diegoh_dev/"} target="_blank" className={`${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'} border-[1px] p-2 rounded-lg`}>
         <Instagram
            color={`${
              color === "blue"
                ? "var(--color-blue)"
                : color === "purple"
                ? "var(--color-purple)"
                : color === "yellow"
                ? "var(--color-yellow)"
                : color === "orange"
                ? "var(--color-orange)"
                : color === "green"
                ? "var(--color-green)"
                : "var(--color-pink)"
            } `}
          />
         </Link>

         <Link href={"https://github.com/Diegoh-dev"} target="_blank" className={`${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'} border-[1px] p-2 rounded-lg`}>
         <Github
            color={`${
              color === "blue"
                ? "var(--color-blue)"
                : color === "purple"
                ? "var(--color-purple)"
                : color === "yellow"
                ? "var(--color-yellow)"
                : color === "orange"
                ? "var(--color-orange)"
                : color === "green"
                ? "var(--color-green)"
                : "var(--color-pink)"
            } `}
          />
         </Link>

         <Link href={"https://twitter.com/DiegoCo45286293"} target="_blank" className={`${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'} border-[1px] p-2 rounded-lg`}>
         <Twitter
            color={`${
              color === "blue"
                ? "var(--color-blue)"
                : color === "purple"
                ? "var(--color-purple)"
                : color === "yellow"
                ? "var(--color-yellow)"
                : color === "orange"
                ? "var(--color-orange)"
                : color === "green"
                ? "var(--color-green)"
                : "var(--color-pink)"
            } `}
          />
         </Link>


        </article>
      </footer>
    )
}