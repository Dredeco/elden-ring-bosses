import { EB_Garamond } from 'next/font/google'
import Head from 'next/head';

import './globals.css'

const EBGaramond = EB_Garamond({ subsets: ['latin'] })

export const metadata = {
  title: 'Elden Ring Bosses',
  description: 'Find here all information about Elden Ring Bosses!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR, en">
      <body className={EBGaramond.className}>
          {children}
      </body>
    </html>
  )
}
