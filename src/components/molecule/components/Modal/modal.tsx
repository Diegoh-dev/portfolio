import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps{
  openModal:boolean;
}
export function Modal({openModal}:ModalProps){
  return (
    <Dialog.Root open={openModal}>
    {/* <Dialog.Trigger asChild>
      <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Edit cari
      </button>
    </Dialog.Trigger> */}
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow dark:bg-dark fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium">
        Personalizar sua exibição
        </Dialog.Title>
        <Dialog.Description className="text-gray-2 font-semibold mt-[10px] mb-3 text-[15px] leading-normal">
          Cor
        </Dialog.Description>

        <div className='w-full bg-bgConfig p-3 rounded-[22px] flex justify-between'>
            <div className='w-10 bg-blue h-10 rounded-full '>

            </div>
            <div className='w-10 bg-purple h-10 rounded-full '>

            </div>
            <div className='w-10 bg-yellowBg h-10 rounded-full '>

            </div>
            <div className='w-10 bg-orangeBg h-10 rounded-full '>

            </div>
            <div className='w-10 bg-greenBg h-10 rounded-full '>

            </div>
            <div className='w-10 bg-pinkBg h-10 rounded-full '>

            </div>
        </div>
     
        <Dialog.Description className="text-gray-2 font-semibold mt-[10px] mb-3 text-[15px] leading-normal">
        Plano de fundo
        </Dialog.Description>

        <div className='w-full bg-bgConfig p-3 rounded-[22px] flex justify-between'>
            <div className='w-28 bg-light h-16 rounded-xl '>

            </div>
            <div className='w-28 bg-poucoDark h-16 rounded-xl '>

            </div>
            <div className='w-28 bg-superDark h-16 rounded-xl '>

            </div>
          
        </div>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-blue  rounded-full text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center  px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Concluído
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            {/* <Cross2Icon /> */}
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
}
