const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/main.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
};
