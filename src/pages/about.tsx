import markdownCompiler from '@/lib/markdown'
import { getPageContent } from '@/lib/posts'
import { AboutPage } from '@/types/Page'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { FiBriefcase, FiMapPin, FiBook } from 'react-icons/fi'
import Image from 'next/image'

type AboutPageProps = {
  data: AboutPage
  content: string
}

export default function About({
  data,
  content
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='relative z-10 py-8'>
      <div className='mb-6 flex gap-6'>
        <Image
          className='rounded-md object-cover ring brightness-90 contrast-[1.2] grayscale'
          src={data.picture}
          alt=''
          width={150}
          height={150}
        />
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold'>Donato Jr.</h1>

          <span className='flex items-center justify-start gap-2'>
            <FiBriefcase className='text-2xl' />
            <p className='text-gray-400'>
              {data.work.position} @{' '}
              <a href={data.work.website} target='_blank' rel='noreferrer'>
                {data.work.company}
              </a>
            </p>
          </span>

          <span className='flex items-center justify-start gap-2'>
            <FiMapPin className='text-2xl' />
            <p className='text-gray-400'>{data.living_in}</p>
          </span>
          <span className='flex items-center justify-start gap-2'>
            <FiBook className='text-2xl' />
            <p className='text-gray-400'>
              {data.college.institution} | {data.college.education}
            </p>
          </span>
        </div>
      </div>
      <div
        className='prose w-full max-w-none text-white prose-headings:mt-0 prose-headings:mb-2 prose-headings:text-2xl prose-headings:text-white prose-p:mt-0 prose-p:mb-8 prose-p:text-gray-400 prose-a:text-gray-300 prose-blockquote:text-2xl prose-strong:text-gray-300 prose-li:text-gray-400'
        dangerouslySetInnerHTML={{ __html: markdownCompiler(content) }}
      ></div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<AboutPageProps> = () => {
  const { content, data } = getPageContent<AboutPage>('about')

  if (!content || !data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data,
      content
    }
  }
}
