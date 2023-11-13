import { ReactNode } from "react"

 interface PostRootProps{
    children:ReactNode;
 }

export function PostRoot({children}: PostRootProps){
    return (
        <main className="border-b-[1px]  border-borderLight dark:border-gray">
            <article className="flex gap-3 p-2">
                    {children}
            </article>
        </main>
    )
}