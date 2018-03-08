const glob = require("glob-all")
const merge = require("webpack-merge")
const webpack = require("webpack")
const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const PurifyCSSPlugin = require("purifycss-extended-webpack")
const StyleExtHtmlPlugin = require("style-ext-html-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const ResourceHintPlugin = require("resource-hints-webpack-plugin")

const common = require("./webpack.common.js")

module.exports = merge(common, {
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				ecma: 8,
				warnings: false,
				compress: {
					warnings: false,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
					drop_console: true,
					drop_debugger: true,
				},
				output: {
					comments: false,
					beautify: false,
				},
				sourceMap: false,
				pure_funcs: ["console.log"],
				toplevel: false,
				nameCache: null,
				ie8: false,
				keep_classnames: undefined,
				keep_fnames: false,
				safari10: false,
			},
		}),
		new PurifyCSSPlugin({
			purifyOptions: {
				whitelist: ["body", "html", "*purr*"],
			},
			minimize: true,
			paths: glob.sync([path.join(__dirname, "src/views/**/*.js"), path.join(__dirname, "src/assets/css/**/*.css")]),
		}),
		new ResourceHintPlugin(),
		new HtmlPlugin({
			template: "./src/index.html",
			excludeChunks: ["base"],
			filename: "index.html",
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
			},
		}),
		new StyleExtHtmlPlugin({
			minify: true,
		}),
	],
})
