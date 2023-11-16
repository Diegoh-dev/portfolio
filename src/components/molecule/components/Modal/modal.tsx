import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check } from "lucide-react";
// import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (_value: boolean) => void;
}
export function Modal({ openModal, setOpenModal }: ModalProps) {
  return (
    <Dialog.Root open={openModal}>
      {/* <Dialog.Trigger asChild>
      <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Edit cari
      </button>
    </Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow dark:bg-dark fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[560px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium">
            Personalizar sua exibição
          </Dialog.Title>
          <Dialog.Description className="text-gray-2 font-semibold mt-[10px] mb-3 text-[15px] leading-normal">
            Cor
          </Dialog.Description>

          <div className="w-full bg-bgConfig p-3 rounded-[22px] flex justify-between">
            <div className="w-10 bg-blue h-10 rounded-full cursor-pointer flex justify-center items-center">
            <Check />
            </div>
            <div className="w-10 bg-purple h-10 rounded-full cursor-pointer flex justify-center items-center "></div>
            <div className="w-10 bg-yellowBg h-10 rounded-full cursor-pointer flex justify-center items-center "></div>
            <div className="w-10 bg-orangeBg h-10 rounded-full cursor-pointer flex justify-center items-center "></div>
            <div className="w-10 bg-greenBg h-10 rounded-full cursor-pointer flex justify-center items-center "></div>
            <div className="w-10 bg-pinkBg h-10 rounded-full cursor-pointer flex justify-center items-center "></div>
          </div>

          <Dialog.Description className="text-gray-2 font-semibold mt-[10px] mb-3 text-[15px] leading-normal">
            Plano de fundo
          </Dialog.Description>

          <div className="w-full bg-bgConfig p-3 rounded-[22px] flex justify-between">
            <div className="w-[154px] bg-light h-16 rounded-xl border-gray-3 border-[1px] flex items-center justify-center cursor-pointer">
            <div className="flex gap-2">
            <Check color="var(--color-dark)"/> <span className="text-littleDark font-semibold">Padrão</span>
            </div>
            </div>
            <div className="w-[154px] bg-littleDark h-16 rounded-xl border-gray-3 border-[1px] flex items-center justify-center cursor-pointer">
            <div className="flex gap-2">
            <Check color="var(--color-light)"/> <span className="text-light font-semibold">Pouco escuro</span>
            </div>
            </div>
            <div className="w-[154px] bg-superDark h-16 rounded-xl border-gray-3 border-[1px] flex items-center justify-center cursor-pointer">
            <div className="flex gap-2">
            <Check color="var(--color-light)"/> <span className="text-light font-semibold">Superescuro</span>
            </div>
            </div>
            
          </div>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild={true}>
              <button
                aria-label="Close"
                className="bg-blue 
            rounded-full
             text-green11 
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
                  focus:outline-none"
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
