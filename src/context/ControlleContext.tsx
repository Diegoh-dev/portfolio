import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ControllerContextProps{
  setOpenMenuMobile:(_value:boolean) => void;
  openMenuMobile:boolean;
  setColor:Dispatch<SetStateAction<string>>;
  color:string | null;
}

export const ControllerContext = createContext({} as ControllerContextProps);


interface ControllerContextProviderProps{
  children:ReactNode;
}

export function ControllerContextProvider({children}:ControllerContextProviderProps){



  const [openMenuMobile,setOpenMenuMobile] = useState(false);
  const colorStorage = localStorage.getItem("color");

  console.log(colorStorage)

  const [color,setColor] = useState( colorStorage ? colorStorage : 'blue');
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