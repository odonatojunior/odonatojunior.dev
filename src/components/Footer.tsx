import Link from 'next/link'
import { GrInstagram, GrTwitter, GrGithub } from 'react-icons/gr'

export const SOCIAL_MEDIA_USER = 'odonatojunior'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className='container relative z-30 mx-auto mt-12 mb-8 flex flex-col items-center justify-center gap-2'>
      <div className='flex gap-2'>
        <Link
          href={`https://instagram.com/${SOCIAL_MEDIA_USER}`}
          target='_blank'
          className='rounded-full p-3 hover:bg-white/10 active:scale-90'
        >
          <GrInstagram className='h-5 w-5 fill-white' />
        </Link>
        <Link
          href={`https://twitter.com/${SOCIAL_MEDIA_USER}`}
          target='_blank'
          className='rounded-full p-3 hover:bg-white/10 active:scale-90'
        >
          <GrTwitter className='h-5 w-5 fill-white' />
        </Link>
        <Link
          href={`https://github.com/${SOCIAL_MEDIA_USER}`}
          target='_blank'
          className='rounded-full p-3 hover:bg-white/10 active:scale-90'
        >
          <GrGithub className='h-5 w-5 fill-white' />
        </Link>
      </div>
      <p className='text-sm text-gray-500'>
        Alguns direitos reservados - {date}
      </p>
    </footer>
  )
}
