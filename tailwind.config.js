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
		},
	}, 
	plugins: [],
}
