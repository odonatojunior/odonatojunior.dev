import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useRouter } from 'next/router'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'

export default function Navbar() {
  const [active, setActive] = useState(true)

  const { asPath } = useRouter()
  const links = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/blog',
      label: 'Blog'
    },
    // {
    //   path: '/projects',
    //   label: 'Projetos'
    // },
    {
      path: '/about',
      label: 'Sobre'
    }
    // {
    //   path: '/links',
    //   label: 'Links'
    // }
  ]
  return (
    <nav className='fixed top-0 z-50 w-full border-b border-b-white/25 text-white backdrop-blur'>
      <div className='container z-20 mx-auto flex max-w-2xl items-center justify-between px-6 py-3'>
        <h2 className='select-none'>~{asPath}</h2>
        <ul className='hidden gap-2 p-2 sm:flex'>
          {links.map((link) => (
            <li key={link.label} className=''>
              <Link
                className='px-1 py-2 hover:text-primary'
                href={link.path}
                onClick={() => setActive(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center gap-2 sm:hidden'>
          <button
            onClick={() => setActive(!active)}
            className='rounded-full p-2 hover:bg-white/10 active:scale-90 active:bg-white/10'
          >
            {active ? (
              <HiMenu className='h-5 w-5' />
            ) : (
              <HiX className='h-5 w-5' />
            )}
          </button>
        </div>
      </div>
      <hr className='border-white/5' />
      <MobileNavbar active={active} links={links} />
    </nav>
  )
}
