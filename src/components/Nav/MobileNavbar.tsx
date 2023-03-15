import Link from 'next/link'

type MobileNavbarProps = {
  links: { path: string; label: string }[]
  active: boolean
}

export default function MobileNavbar({ links, active }: MobileNavbarProps) {
  return (
    <div
      className={`container mx-auto h-screen max-w-2xl bg-black/75 px-6 py-4 sm:hidden
${active && 'hidden'}`}
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
  )
}
