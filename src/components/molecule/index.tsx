import Image from "next/image";
import { IconPerson } from "../atoms/iconPerson";
import postImage from "../../../public/assets/capa.png";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";
export function Posts() {
  return (
    <main className="border-b-[1px] border-gray">

      <article className="flex gap-3 p-2 ">
      <header>
        <IconPerson color="var(--color-purple)" height="40" width="40" />
      </header>

      <section>
        <header>
          <strong>Diego rennan</strong>
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
        <section className="relative  max-h-96 mt-2 min-h-fit h-72 overflow-hidden">
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
      </section>

      </article>



      <footer className="flex justify-around items-center p-2">
        <div className="flex gap-1">
          <MessageCircle />
          <span>150</span>
        </div>

        <div className="flex gap-1">
          <Heart />
          <span>200</span>
        </div>
        <div className="flex gap-1">
          <BarChart2 />
          <span>200</span>
        </div>
        <div>
          <Share2 />
        </div>
      </footer>
    </main>
  );
}
