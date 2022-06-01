import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
    kit: {
        adapter: adapter(),
        browser: {
            hydrate: false,
        },
        prerender: {
            crawl: true,
            enabled: true,
        }
    }
};

export default config;
