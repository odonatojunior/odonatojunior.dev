import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Inter } from '@next/font/google'
import Layout from '@/layouts/Layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Um blog de um desenvolvedor Front-end'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='static/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='static/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='static/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='static/favicons/site.webmanifest' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff'></meta>
        <title>Donato Jr.</title>
      </Head>
      <Layout className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
