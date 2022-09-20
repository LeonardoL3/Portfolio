/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: { 
			colors: {
				'primary': '#44ad9b',
				'secondary': '#3c9484',
				'neutral-300': '#ccd7f7',
				'neutral-500': '#8890b0',
				'estranho': '#0a192f',
			},
			gridTemplateColumns: {
				'projects': 'repeat(auto-fit, minmax(290px, 1fr))',
			},
			animation: {
				typewriter: 'typewriter 6s steps(20) 1s infinite alternate',
				blink: 'blink 300ms steps(2, start) infinite alternate, typewriter 6s steps(20) 1s infinite alternate'
			},
			keyframes: {
				typewriter: {
					'0%, 10%': { left: '0' },
					'80%, 100%': { left: '100%' }
				},
				blink: {
					'100%': { visibility: 'hidden' }
				}
			},
		},
	}, 
	plugins: [],
}
