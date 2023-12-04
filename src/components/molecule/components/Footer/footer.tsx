import { ControllerContext } from "@/context/ControlleContext";
import { Tooltip } from "@chakra-ui/react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useContext } from "react";

export function FooterComponent() {
  const { resolvedTheme } = useTheme();

  const { color } = useContext(ControllerContext);

  return (
    <footer className="flex items-center flex-col h-32 p-[.3rem]">
      <div className="pb-4 w-full flex items-center flex-col ">
        <h3 className="text-xl">VAMOS CONSTRUIR ALGO JUNTOS?</h3>
        <p>
          Se você tem algum projeto ou proposta em mente, sinta-se à vontade para enviar-me
          uma mensagem.
        </p>
      </div>

      <article
        className={`
           rounded-[22px] flex items-center justify-center gap-4 w-3/4`}
      >
        <Tooltip label="Linkedin" placement="bottom">
          <Link
            href={"https://www.linkedin.com/in/diego-costa-dev/"}
            target="_blank"
            className={`${
              resolvedTheme === "light"
                ? "border-borderLight"
                : resolvedTheme === "littleDark"
                ? "border-border-littleDark"
                : "border-border-black"
            } border-[1px] p-2 rounded-lg`}
          >
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
        </Tooltip>

        <Tooltip label="Instagram" placement="bottom">
          <Link
            href={"https://www.instagram.com/diegoh_dev/"}
            target="_blank"
            className={`${
              resolvedTheme === "light"
                ? "border-borderLight"
                : resolvedTheme === "littleDark"
                ? "border-border-littleDark"
                : "border-border-black"
            } border-[1px] p-2 rounded-lg`}
          >
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
        </Tooltip>

        <Tooltip label="Github" placement="bottom">
          <Link
            href={"https://github.com/Diegoh-dev"}
            target="_blank"
            className={`${
              resolvedTheme === "light"
                ? "border-borderLight"
                : resolvedTheme === "littleDark"
                ? "border-border-littleDark"
                : "border-border-black"
            } border-[1px] p-2 rounded-lg`}
          >
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
        </Tooltip>

        <Tooltip label="Twitter" placement="bottom">
          <Link
            href={"https://twitter.com/DiegoCo45286293"}
            target="_blank"
            className={`${
              resolvedTheme === "light"
                ? "border-borderLight"
                : resolvedTheme === "littleDark"
                ? "border-border-littleDark"
                : "border-border-black"
            } border-[1px] p-2 rounded-lg`}
          >
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
        </Tooltip>
      </article>
    </footer>
  );
}
