import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {


	return (
		<Html>
			<Head>
				<meta name="portfolio" content="my portfolio with some of my projects" />
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