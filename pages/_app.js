import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head'

import '../public/css/vendors.css'
import '../public/css/animate.min.css'
import '../public/css/main.css'
import { ClerkProvider } from '@clerk/nextjs'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Угийн бичиг</title>
      </Head>
      <NextNProgress />
      {/* <ClerkProvider {...pageProps} >
      <Component {...pageProps} />
    </ClerkProvider> */}
      <Component {...pageProps} />
    </>
  )
}
