/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['github.com']
	},
	i18n: {
		locales: ['en-US', 'pt-BR', 'es-ES'],
		defaultLocale: 'en-US',
		localeDetection: false,

		/*domains: [
			{
				domain: 'localhost:3000',
				defaultLocale: 'en-US'
			},
			{
				domain: 'pt-br.localhost:3000',
				defaultLocale: 'pt-BR'
			},
			{
				domain: 'es.localhost:3000',
				defaultLocale: 'es'
			}
		]*/
	},
  
}

module.exports = nextConfig
