import { Post, PostMetadata } from '@/types/Post'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { resolve } from 'path'

export const CONTENT_FOLDER = resolve(process.cwd(), 'content')
export const BLOG_POSTS_FOLDER = resolve(process.cwd(), 'content', 'posts')

export function getAllPosts() {
  const filesPath = resolve(BLOG_POSTS_FOLDER)
  const markdownFiles = readdirSync(filesPath)
  const posts = markdownFiles.map((slug) => getPostBySlug(slug))
  return posts
}
function getPostBySlug(slug: string): Post {
  const formattedSlug = slug.replace(/\.md$/, '')
  const post = readFileSync(resolve(BLOG_POSTS_FOLDER, slug)).toString()
  const file = matter(post)
  // TODO: fix this ugly type casting
  return {
    data: file.data as PostMetadata,
    content: file.content,
    slug: `blog/${formattedSlug}`
  }
}
