import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';


import { ModalProvider } from '@/providers/modal-provider'

import './globals.css'
import { ToastProvider } from '@/providers/toast-privider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider /* appearance={ {baseTheme: dark} }*/ >
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider/>
          <ModalProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
