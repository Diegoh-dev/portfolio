import Image from "next/image";
import { IconPerson } from "../../atoms/iconPerson";
import postImage from "./../../../../public/assets/capa.png";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";
import { useTheme } from "next-themes";
export function Posts() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="border-b-[1px] border-gray">

      <article className="flex gap-3 p-2 ">
      <header>
        <IconPerson color="var(--color-purple)" height="40" width="40" />
      </header>
      {/* https://www.youtube.com/watch?v=oPOKpSFqy-I */}
      <section>
        <header>
          <strong>Diego Ribeiro</strong>
        </header>
        
        <article>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem.
          </p>
        </article>
        {/* className="border max-w-full h-80" */}
        <section className="relative  max-h-96 mt-2 min-h-fit h-72 overflow-hidden rounded-2xl">
          <Image
            src={postImage}
            // width={100}
            // height={100}
            alt="capa projeto"
            loading="lazy"
            fill={true}
            objectFit="cover"
          />
        </section>
        
        <footer className="flex justify-between items-center p-2 font-exo mt-2">
        <div className="flex gap-1">
          <MessageCircle size={18.75} color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}/>
          <span className="text-[0.813rem]">150</span>
        </div>

        <div className="flex gap-1">
          <Heart size={18.75} color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}/>
          <span className="text-[0.813rem]">200</span>
        </div>

        <div className="flex gap-1">
          <BarChart2 size={18.75} color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}/>
          <span className="text-[0.813rem]">200</span>
        </div>
        
        <div>
          <Share2 size={18.75} color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}/>
        </div>
      </footer>
      </section>

      </article>



      
    </main>
  );
}
