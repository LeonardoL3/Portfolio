import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { TranslationProvider } from '../contexts/TranslationContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {


	return ( 
		<div className="fixed top-0 left-0 w-full">
			<Head>
				<title> leonard.zz </title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<ThemeProvider attribute="class" enableSystem>
				<TranslationProvider>
					<Component {...pageProps} />

				</TranslationProvider>
			</ThemeProvider>
		</div>
		/*<SmoothScroll>
			<Head>
				<title> leonard.zz </title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<ThemeProvider attribute="class" enableSystem>
				<TranslationProvider>
					<Header /> 
					<Component {...pageProps} />
				</TranslationProvider>
			</ThemeProvider>
	</SmoothScroll> */
		
	)
}

export default MyApp
