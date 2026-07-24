import baseline, { config as baselineConfig } from '@apleasantview/eleventy-plugin-baseline';

const siteUrl = process.env.URL || 'http://localhost:8080/';

const settings = {
	title: 'My Site',
	url: siteUrl,
	defaultLanguage: 'en'
};

export default async function (eleventyConfig) {
	await eleventyConfig.addPlugin(
		baseline(settings, {
			head: {
				showGenerator: true
			}
		})
	);

	eleventyConfig.addGlobalData('settings', settings);

	// Site-specific passthroughs, filters, shortcodes, and collections go here.
}

export const config = baselineConfig;
