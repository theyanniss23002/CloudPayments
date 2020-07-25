const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'public'),
	},
	resolve: {
		alias: {
			'@images': path.resolve(__dirname, 'src/images'),//not working
			'@': path.resolve(__dirname, 'src'),//not working
			'@css': path.resolve(__dirname, 'src/css'),//not working
		},
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'public',
					publicPath: 'images',
					name: '@images/[path][name].[ext]',//not working
				},
			},
			{
				test: /\.(ttf|otf)$/,
				use: ['file-loader']//not working
			},
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: './postcss.config.js' } }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			}
		]
	},
	devServer: {
		port: 4200
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		})
	],
}
