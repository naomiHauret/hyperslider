const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		watchContentBase: true,
		open: true,
		port: 9009,
		host: "0.0.0.0",
		compress: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development"),
		}),
		new HtmlPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
})
