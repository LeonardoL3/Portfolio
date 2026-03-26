import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {


	return (
		<Html>
			<Head>
				<meta name="description" content="Leonardo Lazzaretti — Full Stack Engineer with 5+ years of experience building products with React, TypeScript, Node.js, and AWS." />
				<meta property="og:title" content="Leonardo Lazzaretti" />
				<meta property="og:description" content="Full Stack Engineer building products with React, TypeScript, Node.js, and AWS." />
				<meta property="og:type" content="website" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
