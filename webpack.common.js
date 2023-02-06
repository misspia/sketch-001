const projectName = require('./package.json').name
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './index.js',
	output: {
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: `${projectName}`,
			containerId: `root`,
			template: './src/template.html',
			filename: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(pdf|png|jpg|jpeg|gif|ico|mp3|json)$/,
				type: 'javascript/auto',
				use: [
					{
						loader: 'file-loader',
						options: {},
					}
				],
			},
			{
				test: /\.(glsl|vert|frag)$/,
				use: [
					{
						loader: 'raw-loader',
						options: {},
					},
					{
						loader: 'glslify-loader',
						options: {},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}
