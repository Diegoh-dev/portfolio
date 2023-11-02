import React, {ButtonHTMLAttributes} from 'react';
import * as Switch from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';
interface SwitchComponentProps extends Switch.SwitchProps{
  label?: string;
 
}
export function SwitchComponent({label, ...props}:SwitchComponentProps){
  const { theme } = useTheme();
  return (
    <div className="flex items-center">
      {/* <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
        Airplane mode
      </label> */}
      <Switch.Root
        className={`w-[42px] h-[25px] bg-gray rounded-full relative ${theme === 'dark' ? 'data-[state=checked]:bg-purple' : 'data-[state=checked]:bg-blue'}  outline-none cursor-default`}
        id="airplane-mode"
        {...props}
      >
        <Switch.Thumb className="block w-[20px] h-[20px] bg-light  data-[state=checked]:bg-light  rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  )
}