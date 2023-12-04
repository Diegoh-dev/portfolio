interface PostContentProps{
  texto?:string;
}

export function PostContent({texto = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}:PostContentProps){
    return(
        <article>
        <p>
          {texto}
        </p>
      </article>
    )
}