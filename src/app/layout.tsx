import React from 'react'
import './globals.css'
import '../../public/favicon.png'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FAM Security',
  description: 'Developed by FAM Security',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">

      <link rel="icon" href='/favicon.png' sizes='32x32'></link>

      <link rel="icon" href="/favicon.png" sizes="192x192">
      </link>

      <body className={inter.className}>

        {children}


       </body>
    </html>
  )
}
