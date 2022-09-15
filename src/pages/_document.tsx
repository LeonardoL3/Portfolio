import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {

	let teste = 'light'
	if (typeof window !== 'undefined'){
		teste = localStorage.getItem('theme') || 'light'
	}

	return (
		<Html className="has-scroll-smooth">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}