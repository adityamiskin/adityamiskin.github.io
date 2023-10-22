import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), svgr()],
});
