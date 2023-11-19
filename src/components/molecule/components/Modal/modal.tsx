import React, { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import { ControllerContext } from "@/context/ControlleContext";
// import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (_value: boolean) => void;
}
export function Modal({ openModal, setOpenModal }: ModalProps) {
  const {setColor,color} = useContext(ControllerContext)
  const { resolvedTheme, theme, setTheme  } = useTheme();


  return (
    <Dialog.Root open={openModal}>
      <Dialog.Portal>
        {/* <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" /> */}
        <Dialog.Content
          className={`${
            resolvedTheme === "dark"
              ? "bg-dark"
              : resolvedTheme === "littleDark"
              ? "bg-littleDark"
              : "bg-light"
          } data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[560px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium">
            Personalizar sua exibição
          </Dialog.Title>
          <Dialog.Description
            className={`${
              resolvedTheme === "light"
                ? "text-colorLabel-1"
                : resolvedTheme === "littleDark"
                ? "text-colorLabel-2"
                : "text-colorLabel-3"
            } font-semibold mt-[10px] mb-3 text-[15px] leading-normal`}
          >
            Cor
          </Dialog.Description>
          {/* gray-4 */}
          <div
            className={`${
              resolvedTheme === "light"
                ? "bg-gray-4"
                : resolvedTheme === "littleDark"
                ? "bg-gray-5"
                : "bg-bgConfig"
            } w-full  p-3 rounded-[22px] flex justify-between`}
          >
            <div
              onClick={() => setColor("blue")}
              className="w-10 bg-blue h-10 rounded-full cursor-pointer flex justify-center items-center"
            >
              {color === "blue" && <Check />}
            </div>
            <div
              onClick={() => setColor("purple")}
              className="w-10 bg-purple h-10 rounded-full cursor-pointer flex justify-center items-center "
            >
              {color === "purple" && <Check />}
            </div>
            <div
              onClick={() => setColor("yellow")}
              className="w-10 bg-yellowBg h-10 rounded-full cursor-pointer flex justify-center items-center "
            >
              {color === "yellow" && <Check />}
            </div>
            <div
              onClick={() => setColor("orange")}
              className="w-10 bg-orangeBg h-10 rounded-full cursor-pointer flex justify-center items-center "
            >
              {color === "orange" && <Check />}
            </div>
            <div
              onClick={() => setColor("green")}
              className="w-10 bg-greenBg h-10 rounded-full cursor-pointer flex justify-center items-center "
            >
              {color === "green" && <Check />}
            </div>
            <div
              onClick={() => setColor("pink")}
              className="w-10 bg-pinkBg h-10 rounded-full cursor-pointer flex justify-center items-center "
            >
              {color === "pink" && <Check />}
            </div>
          </div>
          {/* colorLabel-1 */}
          <Dialog.Description
            className={`${
              resolvedTheme === "light"
                ? "text-colorLabel-1"
                : resolvedTheme === "littleDark"
                ? "text-colorLabel-2"
                : "text-colorLabel-3"
            } text-gray-2 font-semibold mt-[10px] mb-3 text-[15px] leading-normal`}
          >
            Plano de fundo
          </Dialog.Description>

          <div
            className={`${
              resolvedTheme === "light"
                ? "bg-gray-4"
                : resolvedTheme === "littleDark"
                ? "bg-gray-5"
                : "bg-bgConfig"
            } w-full p-3 rounded-[22px] flex justify-between`}
          >
            <div
              className={`${ resolvedTheme === "light" &&
                color === "blue"
                  ? "border-blue"
                  : resolvedTheme === "light" && color === "purple"
                  ? "border-purple"
                  : resolvedTheme === "light" && color === "yellow"
                  ? "border-yellowBg"
                  : resolvedTheme === "light" && color === "orange"
                  ? "border-orangeBg"
                  : resolvedTheme === "light" && color === "green"
                  ? "border-greenBg"
                  : resolvedTheme === "light" && color === "pink" ? "border-pinkBg" : "border-gray-3"
              } w-[154px] bg-light h-16 rounded-xl border-[1px] flex items-center justify-center cursor-pointer relative`}
              onClick={() => setTheme("light")}
            >
              <div className="flex gap-2">
                {resolvedTheme === "light" && (
                  <Check color="var(--color-dark)" />
                )}

                <span className="text-littleDark font-semibold">Padrão</span>
              </div>
            </div>

            <div
            
              className={`${ resolvedTheme === "littleDark" &&
              color === "blue"
                ? "border-blue"
                :  resolvedTheme === "littleDark" && color === "purple"
                ? "border-purple"
                :  resolvedTheme === "littleDark" && color === "yellow"
                ? "border-yellowBg"
                :  resolvedTheme === "littleDark" &&  color === "orange"
                ? "border-orangeBg"
                :  resolvedTheme === "littleDark" && color === "green"
                ? "border-greenBg"
                :  resolvedTheme === "littleDark" && color === "pink" ? "border-pinkBg" : "border-gray-3"
            } w-[154px] bg-littleDark h-16 rounded-xl border-[1px] flex items-center justify-center cursor-pointer`}
            onClick={() => setTheme("littleDark")}
            >
              <div className="flex gap-2">
                {resolvedTheme === "littleDark" && (
                  <Check color="var(--color-light)" />
                )}
                <span className="text-light font-semibold">Pouco escuro</span>
              </div>
            </div>
            
            <div
              
              className={`${ resolvedTheme === "dark" &&
              color === "blue"
                ? "border-blue"
                : resolvedTheme === "dark" && color === "purple"
                ? "border-purple"
                : resolvedTheme === "dark" && color === "yellow"
                ? "border-yellowBg"
                : resolvedTheme === "dark" &&  color === "orange"
                ? "border-orangeBg"
                : resolvedTheme === "dark" && color === "green"
                ? "border-greenBg"
                : resolvedTheme === "dark" && color === "pink" ? "border-pinkBg" : "border-gray-3"
            } w-[154px] bg-superDark h-16 rounded-xl border-[1px] flex items-center justify-center cursor-pointer`}
            onClick={() => setTheme("dark")}
            >
              <div className="flex gap-2">
                {resolvedTheme === "dark" && (
                  <Check color="var(--color-light)" />
                )}
                <span className="text-light font-semibold">Superescuro</span>
              </div>
            </div>
          </div>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild={true}>
              <button
                aria-label="Close"
                className={`${
                  color === "blue"
                    ? "bg-blue"
                    : color === "purple"
                    ? "bg-purple"
                    : color === "yellow"
                    ? "bg-yellowBg"
                    : color === "orange"
                    ? "bg-orangeBg"
                    : color === "green"
                    ? "bg-greenBg"
                    : "bg-pinkBg"
                }  
            rounded-full
             text-light 
             hover:bg-green5 
             focus:shadow-green7 
             inline-flex 
             h-[35px] 
             items-center
              justify-center
                px-[15px] 
                font-medium 
                leading-none
                 focus:shadow-[0_0_0_2px]
                  focus:outline-none`}
                onClick={() => setOpenModal(false)}
              >
                Concluído
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
