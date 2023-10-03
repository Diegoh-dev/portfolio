import { ReactNode } from "react"

interface PostFooterRootProps{
    children:ReactNode;
}

export function PostFooterRoot({children}:PostFooterRootProps){
    return (
        <footer className="flex justify-between items-center p-2 font-exo mt-2">
            {children}
        </footer>
    )
}