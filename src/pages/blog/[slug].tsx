import SEO from '@/components/SEO'
import BlogPost from '@/layouts/BlogPost'
import {
  getBlogPostsStaticPaths,
  getSingleBlogPostStaticProps
} from '@/lib/posts'
import { Post } from '@/types/Post'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetServerSidePropsType
} from 'next'

type BlogPostPageProps = {
  post: Post
}

export default function BlogPage({
  post
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title={`Blog | ${post.data.title}`}
        description={post.data.description}
        canonical='https://odonatojunior.dev'
        slug={post.slug}
      />
      <BlogPost
        title={post.data.title}
        tags={post.data.tags}
        content={post.content}
        date={post.data.date}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = (
  context: GetStaticPropsContext
) => {
  const post = getSingleBlogPostStaticProps(context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return post
}

export const getStaticPaths: GetStaticPaths = () => getBlogPostsStaticPaths()
