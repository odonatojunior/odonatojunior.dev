import Card from '@/components/Card'
import CardContainer from '@/components/CardContainer'
import { getAllPosts } from '@/lib/posts'
import { Post } from '@/types/Post'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type HomepageProps = {
  posts: Post[]
}

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.data.title}
              tags={post.data.tags}
              slug={post.slug}
            />
          ))}
        </CardContainer>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomepageProps> = () => {
  const posts = getAllPosts()
  return {
    props: {
      posts
    }
  }
}
