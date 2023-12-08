import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PostImageProjectProps {
  src: StaticImageData;
  href:string;
}

export function PostImageProject({ src,href }: PostImageProjectProps) {
  console.log({href})
  return (
    <section className="relative  max-h-[26rem] mt-2 min-h-fit h-[26rem] overflow-hidden rounded-2xl">
      {href ? (
         <Link href={href ? href : ''} target="_blank">
         <Image
           src={src}
           // width={100}
           // height={100}
           alt="capa projeto"
           loading="lazy"
           fill={true}
           objectFit="cover"
         />
       </Link>
      ) : (
        <Image
        src={src}
        // width={100}
        // height={100}
        alt="capa projeto"
        loading="lazy"
        fill={true}
        objectFit="cover"
      />
      )}
     
    </section>
  );
}
