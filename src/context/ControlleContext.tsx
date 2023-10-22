import { ReactNode, createContext, useState } from "react";

interface ControllerContextProps{
  setOpenMenuMobile:(_value:boolean) => void;
  openMenuMobile:boolean;
}

export const ControllerContext = createContext({} as ControllerContextProps);


interface ControllerContextProviderProps{
  children:ReactNode;
}

export function ControllerContextProvider({children}:ControllerContextProviderProps){

  const [openMenuMobile,setOpenMenuMobile] = useState(false);
  return (
    <ControllerContext.Provider value={{
      openMenuMobile,
      setOpenMenuMobile
    }}>
      {children}
    </ControllerContext.Provider>
  )
}