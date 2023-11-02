/** @type {import("prettier").Config} */
module.exports = {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.cjs',

	bracketSameLine: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	filepath: '/src/**/*{.js,.jsx,.ts,.tsx,.css,.scss,.html,.json,.md}',
	printWidth: 80,
};
