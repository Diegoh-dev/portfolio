'use client'
import { ControllerContextProvider } from '@/context/ControlleContext';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useContext } from 'react';

interface ProvidersProps{
  children : ReactNode;
}

export function Providers({ children }: ProvidersProps) {
//attribute='class'
  return (
    <ControllerContextProvider>
      <ThemeProvider  themes={['light','dark','littleDark']}>
        {children}
        </ThemeProvider>
    </ControllerContextProvider>
  )
}