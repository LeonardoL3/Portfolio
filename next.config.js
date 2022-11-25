/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['github.com']
	},
	i18n: {
		locales: ['en', 'pt', 'es'],
		defaultLocale: 'en',
		localeDetection: false,
	},
  
}

module.exports = nextConfig
