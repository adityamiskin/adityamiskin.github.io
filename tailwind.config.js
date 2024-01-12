/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				slideDown: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				slideDown: 'slideDown 1s ease-in-out',
			},
		},
		fontFamily: {
			body: ['proxima_nova', 'sans-serif'],
			head: ['futura_pt', 'sans-serif'],
		},
	},
	plugins: [],
};
