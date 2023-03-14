import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Custom404({
  author,
  text
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [bonfireLit, setBonfireLit] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBonfireLit(false)
    }, 7000)
    return () => clearTimeout(timeout)
  }, [bonfireLit])

  return (
    <>
      <article className='relative z-20 flex flex-col items-center justify-center gap-12 py-24'>
        <div
          className={`
          ${bonfireLit ? 'bonfireLit' : ''}
          absolute z-50 w-full bg-gradient-to-r from-black/0 via-black/75 to-black/0 p-4 text-center opacity-0`}
        >
          <p className='inline-block bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text font-serif text-2xl font-extrabold uppercase text-transparent'>
            Bonfire Lit
          </p>
        </div>

        <div className='relative select-none'>
          <Image
            src='/static/images/dark-souls-bonfire.gif'
            alt='Gif de uma fogueira do game Dark Souls'
            width={150}
            height={150}
            className='relative z-40 cursor-pointer'
            onClick={() => setBonfireLit(!bonfireLit)}
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
  const fixedQuotes: QuoteResponse[] = [
    {
      author: 'Daniel He4rt',
      text: 'monster php, php monster php'
    }
  ]
  const response = await fetch('https://type.fit/api/quotes')
  const apiQuotes: QuoteResponse[] = await response.json()
  const random = parseInt((Math.random() * 6).toFixed())
  const quotes = [...fixedQuotes, ...apiQuotes]
  const { author, text } = quotes[random]
  return {
    props: {
      author,
      text
    }
  }
}
