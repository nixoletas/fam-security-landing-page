import React from 'react'
import './globals.css'
import '../../public/favicon.png'
import { Inter } from 'next/font/google'

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
      <link rel="alternate" type="text/xml+oembed" href="https://www.famsecurity.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.famsecurity.com.br%2F&amp;format=xml"></link>
      <link rel="icon" href='href="https://www.famsecurity.com.br/wp-content/uploads/favicon.png' sizes='32x32'></link>
      <link rel="icon" href="https://www.famsecurity.com.br/wp-content/uploads/favicon.png" sizes="192x192"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" />
      
      <body className={inter.className}>

        {children}


       </body>
    </html>
  )
}
