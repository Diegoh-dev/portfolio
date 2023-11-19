import { ControllerContext } from "@/context/ControlleContext";
import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { ElementType, ReactNode, useContext, useEffect, useState } from "react";

interface PostIconProps{
    Icon:ElementType;
    children?:ReactNode;

}
// acrescenta a propriedade de quantidade de curtidas/comentarios
export function PostIcon({Icon,children}:PostIconProps){
  const { theme, setTheme } = useTheme();

  const {color} = useContext(ControllerContext);

  const [mounted,setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }


    return (
        <div className="flex gap-1 cursor-pointer">
          <Icon size={18.75} color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/>
        {children}
        </div>
    )
}