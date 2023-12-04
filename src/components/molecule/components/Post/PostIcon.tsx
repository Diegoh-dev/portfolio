import { ControllerContext } from "@/context/ControlleContext";
import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { ElementType, HTMLAttributes, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface PostIconProps extends HTMLAttributes<HTMLButtonElement>{
    Icon:ElementType;
    children?:ReactNode;

}
// acrescenta a propriedade de quantidade de curtidas/comentarios
export function PostIcon({Icon,children,...rest}:PostIconProps){
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
        <button 
        className="flex gap-1 cursor-pointer" 
       {...rest}
        >
          <Icon size={18.75} color={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}/>
        {children}
        </button>
    )
}