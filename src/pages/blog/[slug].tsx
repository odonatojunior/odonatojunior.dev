import BlogPost from '@/layouts/BlogPost'
import { getPostBySlug } from '@/lib/posts'
import { Post } from '@/types/Post'
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetServerSidePropsType
} from 'next'

type BlogPageProps = {
  post: Post
}

export default function BlogPage({
  post
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BlogPost
      title={post.data.title}
      tags={post.data.tags}
      content={post.content}
      date={post.data.date}
    />
  )
}

export const getServerSideProps: GetStaticProps<BlogPageProps> = (
  context: GetStaticPropsContext
) => {
  // TODO: fix this thing, I was tired
  const post = getPostBySlug(`${context.params?.slug}.md`)
  if (!post) {
    return {
      redirect: {
        destination: '/404'
      }
    }
  }
  return {
    props: {
      post
    }
  }
}
