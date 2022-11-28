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

				'light': {
					'100': '#f9f9f9',
					'300': '#1d2854',
					'700': '#333',
					'900': '#000'
				},
				'dark': {
					'100': '#fff',
					'200': '#8890b0',
					'300': '#ccd7f7',
					'900': '#0a192f'
				},
			},
			gridTemplateColumns: {
				'projects': 'repeat(auto-fit, minmax(291px, 1fr))',
			},
			gridTemplateRows: {
				document: '3fr fit-content(100%) 1fr',
			},
			animation: {
				typewriter: 'typewriter 6s steps(20) 1s forwards',
				typewriter_and_blink: 'typewriter 6s steps(20) 1s forwards, blink 700ms steps(2, start) infinite',
				arrow_jumping: 'arrow 340ms ease-in-out infinite alternate'
			},
			keyframes: {
				arrow: {
					to: {transform: 'translateY(0)'},
					from: { transform: 'translateY(-8px)'}
				},
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
