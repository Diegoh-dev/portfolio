import { useTheme } from "next-themes";

export function FooterComponent(){

    const { resolvedTheme } = useTheme();

    return(
        <footer className="flex items-center flex-col h-64">
          <div className="p-4 w-full flex items-center flex-col ">
          <h3 className="text-xl">VAMOS CONSTRUIR ALGO JUNTOS?</h3>
            <p>Se você tem algum projeto em mente, sinta-se à vontade para me enviar uma mensagem.</p>
          </div>

          <article 
          className={`${
            resolvedTheme === "light"
              ? "bg-gray-4"
              : resolvedTheme === "littleDark"
              ? "bg-gray-5"
              : "bg-bgConfig"
          }  p-3 rounded-[22px] flex justify-between w-3/4`}
          >
            redes sociais
          </article>
        </footer>
    )
}