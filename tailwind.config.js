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
				typewriter_and_blink: 'typewriter steps(20) 6s 1s infinite alternate, blink 300ms steps(2, start) infinite alternate'
			},
			keyframes: {
				typewriter: {
					'0%, 10%': { left: '0' },
					'80%, 100%': { left: '100%' }
				},
				typewriterTeste: {
					'0%': {left: '0'}, 
					'5%': { left: '5%' },
					'10%': { left: '10%' },
					'15%': { left: '15%' },
					'20%': { left: '20%' },
					'25%': { left: '25%' },
					'30%': { left: '30%' },
					'35%': { left: '35%' },
					'40%': { left: '40%' },
					'45%': { left: '45%' },
					'50%': { left: '50%' },
					'55%': { left: '55%' },
					'60%': { left: '60%' },
					'65%': { left: '65%' },
					'70%': { left: '70%' },
					'75%': { left: '75%' },
					'80%': { left: '80%' },
					'85%': { left: '85%' },
					'90%': {left: '90%'},
					'95%': {left: '95%'},
					'100%': { left: '100%' },
				},
				blink: {
					'100%': { visibility: 'hidden' }
				}
			},
		},
	}, 
	plugins: [],
}
