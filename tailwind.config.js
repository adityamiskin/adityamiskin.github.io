/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ["'Cormorant Garamond'", 'serif'],
		},
		extend: {},
	},
	plugins: [],
	darkMode: 'class',
};
