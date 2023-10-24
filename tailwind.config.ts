import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      'dark':'#070707',
      'light':'#FFF',
      'blue':'#0000FE',
      'purple':'#7045D4',
      'gray':'#2c2c2c',

    },
    fontFamily:{
      petrov:['var(--font-petrov)'],
      exo:['var(--font-exo)']
    }
  },
  plugins: [],
}
export default config
