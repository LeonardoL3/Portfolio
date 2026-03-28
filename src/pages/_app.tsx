import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { TranslationProvider } from '../contexts/TranslationContext'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="max-w-[1920px] mx-auto">
			<Head>
				<title> Leonardo.zz </title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<ThemeProvider attribute="class" enableSystem>
				<TranslationProvider>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</TranslationProvider>
			</ThemeProvider>
		</div>
	)
}

export default MyApp
