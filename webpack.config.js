const path = require('path');
const Obfuscator = require('webpack-obfuscator');

module.exports = {
	entry: path.resolve(__dirname, 'src/main.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new Obfuscator(
			{
				rotateUnicode: true,
			},
			[]
		),
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			},
		],
	},
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
};
