import Image from "next/image";
import { IconPerson } from "../atoms/iconPerson";
import postImage  from '../../../public/assets/capa.png';
export function Posts(){
  return (
    <div className="flex gap-4 border-b-[1px] border-gray p-2 ">
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
    </div>
  );
}