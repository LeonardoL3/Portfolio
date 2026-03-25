/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
			},
		],
	},
	i18n: {
		locales: ['en', 'pt', 'es'],
		defaultLocale: 'en',
		localeDetection: false,
	},
  
}

module.exports = nextConfig
