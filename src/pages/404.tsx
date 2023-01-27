import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <article className='relative z-20 flex min-h-screen items-center justify-center'>
        <header className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-5xl font-bold text-white'>404</h1>
          <blockquote className='max-w-xs text-center uppercase italic tracking-wider text-white'>
            Nem todos os que vagueiam estão perdidos
          </blockquote>
          <Link className='text-gray-400 hover:underline' href='/'>
            Voltar para a página inicial →
          </Link>
        </header>
      </article>
    </>
  )
}
