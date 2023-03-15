import Head from 'next/head'

type OgImage = {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: 'image/jpeg' | 'image/png' | 'image/webp'
}

type SEOProps = {
  title: string
  description?: string
  canonical?: string
  slug?: string
  images?: OgImage[]
}

export const DEFAULT_DOMAIN = 'https://odonatojunior.dev'

export default function SEO({
  title,
  description,
  canonical,
  slug,
  images
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical} />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={canonical} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={DEFAULT_DOMAIN + slug} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />

      {images?.map((image, index) => (
        <>
          <meta key={index} property='og:image' content={image.url} />
          <meta key={index} property='twitter:image' content={image.url} />
        </>
      ))}
    </Head>
  )
}
