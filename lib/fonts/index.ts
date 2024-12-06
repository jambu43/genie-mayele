import localFont from 'next/font/local'

export const Univers = localFont({
  src: [
    {
      path: './UniversBold.ttf',
      weight: '700',
      style: 'normal',
    },
    ],
  variable: '--font-Univers',
})