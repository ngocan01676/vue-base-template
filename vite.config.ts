import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@router': path.resolve(__dirname, './src/router'),
			'@stores': path.resolve(__dirname, './src/stores'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@register': path.resolve(__dirname, './src/plugins'),
		},
	},
});
