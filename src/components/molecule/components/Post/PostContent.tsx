interface PostContentProps{
  texto?:string;
}

export function PostContent({texto = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}:PostContentProps){
    return(
        <article>
        <p className="mt-2 text-justify	mr-[.8rem]">
          {texto}
        </p>
      </article>
    )
}