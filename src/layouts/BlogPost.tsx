import Tag from '@/components/Tag'
import markdownCompiler from '@/lib/markdown'

type BlogPostProps = {
  title: string
  tags: string[]
  date: Date
  content: string
}

export default function BlogPost({
  content,
  date,
  tags,
  title
}: BlogPostProps) {
  return (
    <>
      <article className='relative z-20'>
        <header className='py-8'>
          <h2 className='mb-2 text-3xl font-bold leading-tight text-white'>
            {title}
          </h2>
          <div className='flex gap-2'>
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
          <p className='mt-4 text-gray-500'>Criado em {date.toString()}</p>
        </header>
        <div
          className='prose w-full max-w-none prose-headings:mt-0 prose-headings:mb-2 prose-headings:text-2xl prose-headings:text-white prose-p:mt-0 prose-p:mb-8 prose-p:text-gray-400 prose-blockquote:text-2xl'
          dangerouslySetInnerHTML={{ __html: markdownCompiler(content) }}
        ></div>
      </article>
    </>
  )
}
