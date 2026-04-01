import nodecraft from '@nodecraft/eslint-config';
import eslintPluginAstro from 'eslint-plugin-astro';
import tailwind from 'eslint-plugin-tailwindcss';

const jsonIgnore = ['**/*.json'];
const withJsonIgnore = function(configs) {
	return configs.map(function(config) {
		return {
			...config,
			ignores: [...(config.ignores || []), ...jsonIgnore],
		};
	});
};

export default [
	// Global ignores
	{
		ignores: [
			'dist/**',
			'.wrangler/**',
		],
	},

	// TypeScript config (includes base), excluding JSON files
	...withJsonIgnore(nodecraft.configs.typescript),

	// JSON
	...nodecraft.configs.json,

	// Astro
	...eslintPluginAstro.configs.recommended,

	// Tailwind
	...tailwind.configs['flat/recommended'],

	// Overrides
	{
		ignores: jsonIgnore,
		rules: {
			'n/no-unsupported-features/es-syntax': 'off',
			'n/no-missing-import': 'off',
			'n/no-unsupported-features/node-builtins': 'off',
			'@stylistic/no-mixed-operators': 'off',
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
];
