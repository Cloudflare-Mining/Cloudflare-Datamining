import {defineConfig} from 'astro/config';

import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://cfdata.lol',
	integrations: [
		tailwind(),
		robotsTxt({
			sitemap: false,
			policy: [{
				userAgent: '*',
				allow: '/',
			}],
		}),
	],
});