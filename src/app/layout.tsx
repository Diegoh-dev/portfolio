import { Providers } from '@/components/atoms/providers';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const petrov = localFont({
  src:[
    {
      path:'../../public/fonts/PetrovSans-Trial-Bold.ttf',
      weight:'700',
      style:'normal',
    },
    {
      path:'../../public/fonts/PetrovSans-Trial-ExtraLight.ttf',
      weight:'500',
      style:'normal'
    },
    {
      path:'../../public/fonts/PetrovSans-Trial-Light.ttf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../../public/fonts/PetrovSans-Trial-Regular.ttf',
      weight:'400',
      style:'normal'
    },
  ],
  variable:'--font-petrov'
});

const exo = localFont({
  src:[
    {
      path:'../../public/fonts/Exo2-Bold.otf',
      weight:'700',
      style:'normal',
    },
    {
      path:'../../public/fonts/Exo2-Light.otf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../../public/fonts/Exo2-Medium.otf',
      weight:'600',
      style:'normal'
    },
    {
      path:'../../public/fonts/Exo2-Regular.otf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../../public/fonts/Exo2-SemiBold.otf',
      weight:'600',
      style:'normal'
    },
  ],
  variable:'--font-exo'
});

export const metadata: Metadata = {
  title: 'Diego Dev',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt-br" suppressHydrationWarning={true} className={`${petrov.variable} ${exo.variable}`}>
      <body style={{
        width:'100vw',
        height:'100vh',
        overflow:'hidden'
      }}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
