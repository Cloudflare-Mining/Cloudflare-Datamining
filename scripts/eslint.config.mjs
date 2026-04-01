import base from '@nodecraft/eslint-config/base';
import json from '@nodecraft/eslint-config/json';
import node from '@nodecraft/eslint-config/node';

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
			'node_modules/**',
			'patches/**',
		],
	},

	// Base + Node config, excluding JSON files
	...withJsonIgnore(base),
	...withJsonIgnore(node),

	// JSON
	...json,

	// Overrides
	{
		ignores: jsonIgnore,
		rules: {
			'n/no-unsupported-features/es-syntax': 'off',
			'n/no-missing-import': 'off',
			'n/no-unsupported-features/node-builtins': 'off',
			'n/no-process-exit': 'off',
		},
	},
];
