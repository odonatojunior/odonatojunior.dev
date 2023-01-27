import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [active, setActive] = useState(false)
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
    {
      path: '/projetos',
      label: 'Projetos'
    },
    {
      path: '/sobre',
      label: 'Sobre'
    },
    {
      path: '/links',
      label: 'Links'
    }
  ]
  return (
    <nav className='fixed top-0 z-50 w-full border-b border-b-white/5 text-white backdrop-blur'>
      <div className='container z-20 mx-auto flex max-w-4xl items-center justify-between px-6 py-3'>
        <h2 className='select-none'>~{asPath}</h2>
        <div className='flex items-center justify-center gap-2'>
          <button
            onClick={() => setActive(!active)}
            className='rounded-full p-2 hover:bg-white/10 active:bg-white/10'
          >
            {!active ? (
              <HiMenu className='h-5 w-5' />
            ) : (
              <HiX className='h-5 w-5' />
            )}
          </button>
        </div>
      </div>
      <hr className='border-white/5' />
      <div
        className={`container mx-auto h-screen max-w-4xl bg-black/75 px-6 py-4
        ${!active && 'hidden'}`}
      >
        <ul className='flex flex-col gap-2'>
          {links.map((link) => (
            <li key={link.label} className='text-2xl font-bold'>
              <Link className='px-1 py-2' href={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
