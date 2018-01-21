const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR=[
    'react',
    'react-dom'
];

module.exports = {
  entry: {
    app: './src/js/index.js',
    vendor: VENDOR
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
        extensions: ['.js', '.jsx']
  },
  module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader'],
                  publicPath: './dist'
                }), 
            },
            //2 处理图片,图片路径需是相对路径才能看到效果
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        // 默认打包到dist下的img文件夹
                        name:'img/[name].[hash:7].[ext]'
                    }
                }
            },
        ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      // new HtmlWebpackPlugin()
      new HtmlWebpackPlugin({
        title: 'Test',
        filename: 'index.html',
        template: 'index.ejs'
      }),
      new ExtractTextPlugin({
          filename: 'style.css',
          disable: false,
          allChunks: true
      }),
    ],
};
