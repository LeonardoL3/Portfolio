import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ScrollButton } from '../components/ScrollButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <ScrollButton />
    </div>
  )
}

export default MyApp
