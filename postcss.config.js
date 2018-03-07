module.exports = {
	plugins: [
		require("postcss-easy-import"),
		require("postcss-normalize"),
		require("postcss-cssnext"),
		require("tailwindcss")("./tailwind.js"),
	],
}
