const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = (env, {mode}) => ({
	mode,
	entry: './components/index.js',
	devServer: {
		static: {
				directory: path.join(__dirname, '../test'),
		},
		hot: true,
		liveReload: false,
		compress: true,
		host: 'localhost',
		port: 9000 // port buat dijalanin di dev
	},
	externals: [nodeExternals()],
	output: {
		clean: true,
		filename: 'padelcompo.umd.js',
		path: path.resolve(__dirname, '../dist'),
		libraryTarget: 'umd',
		globalObject: 'this',
		umdNamedDefine: true
	},
	plugins: [new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),],
	module: {
		rules: [
			{
				// Extract and Transpile ES6+ in to ES5 
				test: /\.(js|jsx)$/,
				exclude: /[\\/]node_modules[\\/]/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env', '@babel/preset-react'] },
			},
			{
				test: [/.css$|.scss$/],
				use: [
				  MiniCssExtractPlugin.loader,
				  "css-loader",
				  "postcss-loader",
				  "sass-loader"
				],
				include: path.resolve(__dirname, './components'),
				exclude: /[\\/]node_modules[\\/]/,
			}
		]
	},
})