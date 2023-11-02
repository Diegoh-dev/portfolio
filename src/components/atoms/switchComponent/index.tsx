import React from 'react';
import * as Switch from '@radix-ui/react-switch';
interface SwitchComponentProps{
  label?: string;
}
export function SwitchComponent({label}:SwitchComponentProps){
  return (
    <div className="flex items-center">
      {/* <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
        Airplane mode
      </label> */}
      <Switch.Root
        className="w-[42px] h-[25px] bg-gray rounded-full relative data-[state=checked]:bg-purple outline-none cursor-default"
        id="airplane-mode"
      >
        <Switch.Thumb className="block w-[20px] h-[20px] bg-light  data-[state=checked]:bg-light  rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  )
}