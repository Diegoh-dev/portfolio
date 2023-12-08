import { useTheme } from "next-themes";
import { ReactNode } from "react"

 interface PostRootProps{
    children:ReactNode;
 }

export function PostRoot({children}: PostRootProps){
    const {resolvedTheme} = useTheme();
    return (
        <main className={ `border-b-[1px] ${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'}`}>
            <article className="flex gap-3 p-2">
                    {children}
            </article>
        </main>
    )
}