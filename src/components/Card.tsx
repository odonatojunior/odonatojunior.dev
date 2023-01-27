import Link from 'next/link'
import Tag from './Tag'
import { HiExternalLink } from 'react-icons/hi'

type CardProps = {
  title: string
  slug: string
  tags?: string[]
}

export default function Card({ title, tags, slug }: CardProps) {
  return (
    <Link
      href={slug || '#'}
      className='z-20 flex items-end justify-between gap-2 rounded-md bg-white/10 p-4 backdrop-blur-md transition hover:scale-105 hover:bg-white/25 active:bg-white/20'
    >
      <div className='flex flex-col items-start gap-2 '>
        <div className='flex flex-wrap gap-1'>
          {tags?.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <h1 className='text-lg font-semibold leading-snug text-white'>
          {title}
        </h1>
      </div>
      <HiExternalLink className='h-6 w-6 min-w-fit fill-white' />
    </Link>
  )
}
