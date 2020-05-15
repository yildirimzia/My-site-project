const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');


module.exports = {
	entry: './src/index.js',
	output: {
	  path: path.resolve(__dirname, 'dist'),
	  filename: 'bundle.js'
	},

	module: {
		rules: [
			{
			
			test: /\.scss$/i,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader'],
				publicPath: '/dist'		
			  })
			}
		]
	},
	
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		open: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
		  title: 'Project',
		  minify: {
			  collapseWhitespace: true
		  },
		  hash: true,
		  template: './template/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'styles.css',
			disable: false,
			allChunks: true
		})
	]
};