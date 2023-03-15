import Card from '@/components/Card/Card'
import CardContainer from '@/components/Card/CardContainer'
import { getAllBlogPostsStaticProps } from '@/lib/posts'
import { Post } from '@/types/Post'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

type HomepageProps = {
  posts?: Post[]
}

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
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
          {posts?.map(({ data, slug }, index) => (
            <Card key={index} title={data.title} tags={data.tags} slug={slug} />
          ))}
        </CardContainer>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomepageProps> = () =>
  getAllBlogPostsStaticProps()
