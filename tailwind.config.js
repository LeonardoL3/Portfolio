/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'dark': '#0a192f',
      },
    },
  },
  plugins: [],
};
