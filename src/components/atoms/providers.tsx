'use client'
import { ControllerContextProvider } from '@/context/ControlleContext';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ProvidersProps{
  children : ReactNode;
}

export function Providers({ children }: ProvidersProps) {
//attribute='class'
  return (
    <ControllerContextProvider>
      <ThemeProvider themes={["light", "dark", "littleDark"]}>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        closeButton={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />

        {children}
      </ThemeProvider>
    </ControllerContextProvider>
  );
}