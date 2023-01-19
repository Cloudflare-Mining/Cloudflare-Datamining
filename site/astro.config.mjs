import {defineConfig} from 'astro/config';
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

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
	vite: {
		build: {
			assetsInlineLimit: '0',
			cssCodeSplit: false,
		},
	},
});