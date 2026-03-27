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
					'900': '#000',
				},
				'dark': {
					'100': '#fff',
					'200': '#a1a1aa',
					'300': '#d4d4d8',
					'900': '#18181b'
				},
			},
			gridTemplateColumns: {
				'projects': 'repeat(auto-fit, minmax(291px, 1fr))',
				'skills': 'repeat(auto-fit, minmax(48px, 1fr))',
				'contact-me': 'repeat(auto-fit, minmax(186px, 1fr))'
			},
			gridTemplateRows: {
				document: '2fr 1fr',
			},
			animation: {
				typewriter: 'typewriter 6s steps(20) 1s forwards',
				typewriter_and_blink: 'typewriter 6s steps(20) 1s forwards, blink 700ms steps(2, start) infinite',
				arrow_jumping: 'arrow 500ms ease-in-out infinite alternate'
			},
			keyframes: {
				arrow: {
					to: {transform: 'translateY(0)'},
					from: { transform: 'translateY(-4px)'}
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
