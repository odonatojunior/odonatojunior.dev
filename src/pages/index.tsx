import Card from '@/components/Card'
import CardContainer from '@/components/CardContainer'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Donato Jr.</title>
      </Head>
      <header className='relative z-10 py-8'>
        <h1 className='mb-1 text-center text-3xl font-bold tracking-tight text-white'>
          Donato Jr.
        </h1>
        <p className='text-center text-gray-400'>
          Um designer brincando com front-end
        </p>
      </header>
      <section className='relative z-20'>
        <div className='mb-4 flex items-end justify-between'>
          <h3 className='text-xl font-semibold text-white'>Últimos posts</h3>
          <Link className='text-sm text-gray-500 hover:underline' href='/blog'>
            Ver todos →
          </Link>
        </div>
        <CardContainer>
          <Card title='Criando um blog com Nuxt, NuxtContent e GitHub Pages' />
          <Card title='Como fazer miojo rápido em apenas 10 minutos + 2h de espera' />
          <Card title='Automação aplicada a ambientes de testes front-end' />
        </CardContainer>
      </section>
    </>
  )
}
