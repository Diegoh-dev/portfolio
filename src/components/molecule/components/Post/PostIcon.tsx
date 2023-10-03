import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { ElementType } from "react";

interface PostIconProps{
    Icon:ElementType;

}
// acrescenta a propriedade de quantidade de curtidas/comentarios
export function PostIcon({Icon}:PostIconProps){
  const { theme, setTheme } = useTheme();

    return (
        <div className="flex gap-1">
          <Icon size={18.75} color={theme === 'light' ? "var(--color-blue)" : "var(--color-purple)"}/>
          <span className="text-[0.813rem]">150</span>
        </div>
    )
}