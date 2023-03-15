import Card from '@/components/Card/Card'
import CardContainer from '@/components/Card/CardContainer'
import SEO from '@/components/SEO'
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
      <SEO
        title='Blog'
        description='Eu escrevo algumas coisas aqui'
        canonical='https://odonatojunior.dev'
        slug='/blog'
      />
      <div className='mb-4 flex items-end justify-between pt-8'>
        <h3 className='text-xl font-semibold text-white'>Todos os posts</h3>
      </div>
      <CardContainer>
        {posts?.map(({ slug, data }, index) => (
          <Card key={index} slug={slug} title={data.title} tags={data.tags} />
        ))}
      </CardContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = () =>
  getAllBlogPostsStaticProps()
