import Card from '@/components/Card'
import { getAllBlogPostsStaticProps } from '@/lib/posts'
import { Post } from '@/types/Post'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type BlogPageProps = {
  posts: Post[]
}

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className='mb-4 flex items-end justify-between pt-8'>
        <h3 className='text-xl font-semibold text-white'>Todos os posts</h3>
      </div>
      <article className='flex flex-col gap-2'>
        {posts?.map((post, index) => (
          <Card
            slug={post.slug}
            title={post.data.title}
            key={index}
            tags={post.data.tags}
          />
        ))}
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = () =>
  getAllBlogPostsStaticProps()
