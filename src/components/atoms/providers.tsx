'use client'
import { ControllerContextProvider } from '@/context/ControlleContext';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps{
  children : ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ControllerContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ControllerContextProvider>
  )
}