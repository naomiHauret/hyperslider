const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const exludedFolders = [path.join(__dirname, "node_modules")]

module.exports = {
	entry: ["./src/index.js"],
	output: {
		filename: "assets/scripts/[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			// JS
			{
				test: /\.js$/,
				exclude: exludedFolders,
				use: "babel-loader",
			},
			// CSS (modules)
			{
				test: /views(\/|\\).*\.css$/,
				exclude: exludedFolders,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules&importLoaders=1&localIdentName=purr_[name]__[local]___[hash:base64:5]!postcss-loader",
				}),
			},
			// CSS
			{
				test: /assets(\/|\\).*\.css$/,
				exclude: exludedFolders,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?importLoaders=1!postcss-loader",
				}),
			},
			// Images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "assets/images/[name].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "assets/stylesheets/[name].[hash].css",
			allChunks: true,
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
	],
}
