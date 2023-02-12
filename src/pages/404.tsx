import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404({
  author,
  text
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <article className='relative z-20 flex flex-col items-center justify-center gap-12 py-24'>
        <div className='relative select-none'>
          <Image
            src='/static/images/dark-souls-bonfire.gif'
            alt='Gif de uma fogueira do game Dark Souls'
            width={150}
            height={150}
            className='relative z-50'
          />
          <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 text-9xl font-black tracking-tighter text-white'>
            404
          </h1>
        </div>

        <div className='max-w-lg rounded-md text-center'>
          <blockquote className='text-center font-bold uppercase tracking-wider text-white'>
            {text}
          </blockquote>
          <p className='text-gray-400'>{author ?? 'Unknown'}</p>
        </div>

        <Link className='text-gray-400 hover:underline' href='/'>
          Voltar para a página inicial →
        </Link>
      </article>
    </>
  )
}

type QuoteResponse = {
  text: string | null
  author: string
}

export const getStaticProps: GetStaticProps<QuoteResponse> = async () => {
  const response = await fetch('https://type.fit/api/quotes')
  const quote: QuoteResponse[] = await response.json()
  const random = parseInt((Math.random() * 200).toFixed())
  const { author, text } = quote[random]
  return {
    props: {
      author,
      text
    }
  }
}
