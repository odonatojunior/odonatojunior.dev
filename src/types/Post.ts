export type Post = {
  data: PostMetadata
  content: string
  slug: string
}

export type PostMetadata = {
  title: string
  tags: string[]
  date?: Date
  description: string
}
