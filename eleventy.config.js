import baseline, { config as baselineConfig } from '@apleasantview/eleventy-plugin-baseline';

const siteUrl = process.env.URL || 'http://localhost:8080/';

const settings = {
	title: 'eleventy-baseline x reveal.js',
	url: siteUrl,
	defaultLanguage: 'en',
	head: {
		link: [{ rel: 'stylesheet', href: '/assets/css/index.css' }],
		script: [{ src: '/assets/js/index.js', defer: true }]
	}
};

export default async function (eleventyConfig) {
	await eleventyConfig.addPlugin(baseline(settings, { head: { showGenerator: true } }));

	eleventyConfig.addGlobalData('settings', settings);

	// Site-specific passthroughs, filters, shortcodes, and collections go here.
	eleventyConfig.addCollection('slides', function (collectionApi) {
		const slides = collectionApi.getFilteredByGlob('src/slides/**/*.md');
		return slides.sort(function (a, b) {
			return a.inputPath.localeCompare(b.inputPath);
		});
	});
}

export const config = baselineConfig;
