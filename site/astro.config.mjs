import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	site: 'https://cfdata.lol',
	integrations: [
		tailwind(),
		sitemap(),
		robotsTxt({
			sitemap: true,
			policy: [{
				userAgent: '*',
				allow: '/',
			}],
		}),
		react(),
	],
	output: 'server',
	adapter: cloudflare(),
	vite: {
		build: {
			assetsInlineLimit: '0',
			cssCodeSplit: false,
		},
	},
});
