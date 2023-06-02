import { QueryWrapper } from './components/Wrappers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grocery List',
  description: 'Built by Kai for GojiLabs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <QueryWrapper>
            {children}
          </QueryWrapper>
        </body>
    </html>
  )
}
