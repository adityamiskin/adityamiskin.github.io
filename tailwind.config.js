/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			body: ['proxima_nova', 'sans-serif'],
			head: ['futura_pt', 'sans-serif'],
		},
	},
	plugins: [],
};
