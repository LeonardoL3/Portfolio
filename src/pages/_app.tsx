import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import { TranslationProvider } from '../contexts/TranslationContext'

function MyApp({ Component, pageProps }: AppProps) {
	return ( 
		<ThemeProvider attribute="class" enableSystem>
			<TranslationProvider>
				<Header />
				<Component {...pageProps} />
			</TranslationProvider>
		</ThemeProvider>
	)
}

export default MyApp
