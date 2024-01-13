/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'3xl': '2000px',
			},
		},
		fontFamily: {
			body: ['proxima_nova', 'sans-serif'],
			head: ['futura_pt', 'sans-serif'],
		},
	},
	plugins: [],
};
