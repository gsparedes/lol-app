import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lol Summoner App',
  description: 'Lol Summoner Statistic App',
}

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='py-6'>
          <nav className='container flex items-center justify-between'>
            <ul>
              <li>
                <Link href='/'>Summoner Search</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
