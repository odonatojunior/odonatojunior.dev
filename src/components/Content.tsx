import markdownCompiler from '@/lib/markdown'

type ContentProps = {
  content: string
}

export default function Content({ content }: ContentProps) {
  return (
    <div
      className='prose w-full max-w-none text-white prose-headings:mt-0 prose-headings:mb-2 prose-headings:text-2xl prose-headings:text-white prose-p:mt-0 prose-p:mb-3 prose-p:text-gray-400 prose-a:text-gray-300 prose-blockquote:text-2xl prose-strong:text-gray-300 prose-li:text-gray-400'
      dangerouslySetInnerHTML={{ __html: markdownCompiler(content) }}
    ></div>
  )
}
