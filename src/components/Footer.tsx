import Link from 'next/link'
import { GrInstagram, GrTwitter, GrGithub } from 'react-icons/gr'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className='relative z-20 mt-24 flex flex-col items-center justify-center gap-2'>
      <div className='flex gap-2'>
        <Link href='#'>
          <GrInstagram className='h-5 w-5 fill-white' />
        </Link>
        <Link href='#'>
          <GrTwitter className='h-5 w-5 fill-white' />
        </Link>
        <Link href='#'>
          <GrGithub className='h-5 w-5 fill-white' />
        </Link>
      </div>
      <p className='text-sm text-gray-500'>
        Alguns direitos reservados - {date}
      </p>
    </footer>
  )
}
