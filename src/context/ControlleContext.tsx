import { ReactNode, createContext, useState } from "react";

interface ControllerContextProps{
  setOpenMenuMobile:(_value:boolean) => void;
  openMenuMobile:boolean;
  setColor:(_cor:string) => void;
  color:string;
}

export const ControllerContext = createContext({} as ControllerContextProps);


interface ControllerContextProviderProps{
  children:ReactNode;
}

export function ControllerContextProvider({children}:ControllerContextProviderProps){

  const [openMenuMobile,setOpenMenuMobile] = useState(false);
  const [color,setColor] = useState('blue');
  return (
    <ControllerContext.Provider value={{
      openMenuMobile,
      setOpenMenuMobile,
      setColor,
      color
    }}>
      {children}
    </ControllerContext.Provider>
  )
}