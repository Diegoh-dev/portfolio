import { ReactNode } from "react";

interface PostSectionContentProps{
    children:ReactNode;
}

export function PostSectionContent({children}:PostSectionContentProps){
    return (
        <section>
            {children}
        </section>
    )
}