import Image from "next/image";

import postImage from '../../../../../public/assets/capa.png'

export function PostImageProject(){
    return (
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
    )
}