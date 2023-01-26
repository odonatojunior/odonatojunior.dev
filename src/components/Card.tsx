import Link from 'next/link'
import Tag from './Tag'
import { HiExternalLink } from 'react-icons/hi'

type CardProps = {
  title: string
}

export default function Card({ title }: CardProps) {
  return (
    <Link
      href='#'
      className='relative flex items-end justify-between gap-2 rounded-md bg-white/10 p-4 backdrop-blur-md transition hover:scale-105 hover:bg-white/25 hover:shadow-md hover:shadow-white/5 active:bg-white/20'
    >
      <div className='flex flex-col items-start gap-2 '>
        <Tag name='Next JS' />
        <h1 className='text-lg font-semibold leading-snug text-white'>
          {title}
        </h1>
      </div>
      <HiExternalLink className='h-6 w-6 min-w-fit fill-white' />
    </Link>
  )
}
