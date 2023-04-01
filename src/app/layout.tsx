import { AppWrapper } from '@/context/state'
import './globals.css'
import localFont from 'next/font/local'
const fcmm = localFont({
  variable: '--font-fcmm',
  src: [
    {
      path: '../font/FC_Marshmallow_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/FC_Marshmallow_Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${fcmm.variable} font-sans`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
