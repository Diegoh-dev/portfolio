import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
       // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
       // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'bg-dark':'#121212',
        'bg-light':'#FFF',
      }
    },
    colors: {
      'dark':'#070707',//
      'littleDark':'#15202B',
      'superDark':'#000000',
      'light':'#FFF',
      'blue':'#0000FE',
      'purple':'#7045D4',
      'gray':'#2c2c2c',
      'gray-2':'#64686D',
      'gray-3':'#333639',
      'gray-4':'#F7F9F9',
      'gray-5':'#1E2732',
      'hoverDark-2':'#2C3640',
      'hoverLight':'#E7E7E8',
      'hoverDark':'#181818',
      'borderLight':'#eff3f4',
      'bgConfig':'#16181C',
      'yellowBg':'#FFD400',
      'orangeBg':'#FF7A00',
      'greenBg':'#00BA7C',
      'pinkBg':'#F91880',
      'colorLabel-1':'#536471',
      'colorLabel-2':'#8b98a5',
      'colorLabel-3':'#71767b',
      'border-littleDark':'#38444d',
      'border-black':'#2f3336',

    },
    fontFamily:{
      petrov:['var(--font-petrov)'],
      exo:['var(--font-exo)']
    }
  },
  plugins: [],
}
export default config
