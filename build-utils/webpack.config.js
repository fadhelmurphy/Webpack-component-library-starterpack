const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = (env, {mode}) => ({
	mode,
	entry: {
		app: './components/index.js',
		
	},
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
		filename: 'index.js',
		path: path.resolve(__dirname, '../dist'),
		libraryTarget: 'umd'
	},
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				// Extract and Transpile ES6+ in to ES5 
				test: /\.(js|jsx)$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, './components'),
				exclude: /[\\/]node_modules[\\/]/,
			}
		]
	},
})