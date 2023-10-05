import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { ElementType, ReactNode } from "react";

interface PostIconProps{
    Icon:ElementType;
    children?:ReactNode;

}
// acrescenta a propriedade de quantidade de curtidas/comentarios
export function PostIcon({Icon,children}:PostIconProps){
  const { theme, setTheme } = useTheme();

    return (
        <div className="flex gap-1">
          <Icon size={18.75} color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}/>
        {children}
        </div>
    )
}