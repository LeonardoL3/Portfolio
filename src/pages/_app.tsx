import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { TranslationProvider } from '../contexts/TranslationContext'
import Head from 'next/head'
import SmoothScroll from '../components/SmoothScroll'

function MyApp({ Component, pageProps }: AppProps) {

	if (typeof window === 'undefined') return null

	return ( 
		<React.Suspense fallback={<div>...loading</div>}>
			<SmoothScroll>
				<Head>
					<title> leonard.zz </title>
					<link rel="shortcut icon" href="/favicon.png" />
				</Head>
				<ThemeProvider attribute="class" enableSystem>
					<TranslationProvider>
						{/*<Header /> */}
						<Component {...pageProps} />
					</TranslationProvider>
				</ThemeProvider>
			</SmoothScroll>
		</React.Suspense>
	)
}

export default MyApp
