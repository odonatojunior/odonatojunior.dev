import { GetStaticPropsContext } from 'next'
import { PostMetadata } from '@/types/Post'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { resolve } from 'path'

const BLOG_POSTS_FOLDER = resolve(process.cwd(), 'content', 'posts')
const CONTENT_FOLDER = resolve(process.cwd(), 'content')

function getAllPosts() {
  const filesPath = resolve(BLOG_POSTS_FOLDER)
  const markdownFiles = readdirSync(filesPath)
  const posts = markdownFiles.map((slug) => getPostBySlug(slug))
  return posts
}

function getPostBySlug(slug: string) {
  const formattedSlug = sanitizePostFileName(slug)

  const file = readFileSync(resolve(BLOG_POSTS_FOLDER, slug), 'utf-8')
  const post = matter(file)
  // TODO: fix this ugly type casting
  return {
    data: post.data as PostMetadata,
    content: post.content,
    slug: `/blog/${formattedSlug}`
  }
}

function sanitizePostFileName(filename: string) {
  return filename.replace(/\.md$/, '')
}

export function getSingleBlogPostStaticProps(context: GetStaticPropsContext) {
  const post = getPostBySlug(`${context.params?.slug}.md`)

  return {
    props: {
      post
    }
  }
}

export function getBlogPostsStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts?.map((p) => p?.slug),
    fallback: false
  }
}

export function getAllBlogPostsStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts
    }
  }
}

export function getPageContent<T>(slug: string) {
  const file = readFileSync(resolve(CONTENT_FOLDER, `${slug}.md`), 'utf-8')
  const page = matter(file)
  return {
    data: page.data as T,
    content: page.content
  }
}
