'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className='py-6'>
      <nav className='container flex items-center'>
        <Link className={`px-2 link ${pathname === '/' ? 'active' : ''}`} href='/'>
          Summoner Search
        </Link>
        <Link className={`px-2 link ${pathname === '/summoner' ? 'active' : ''}`} href='/summoner'>
          Summoner Details
        </Link>
        <Link className={`px-2 link ${pathname === '/champions' ? 'active' : ''}`} href='/champions'>
          Champions
        </Link>
      </nav>
    </header>
  )
}