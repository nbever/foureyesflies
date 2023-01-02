const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const srcPath = path.join(__dirname, '.');

module.exports = {
  context: srcPath,
  entry: 'index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    compress: true,
    port: 9000,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        secure: false,
        target: 'http://localhost:5000'
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Four Eyes Flies',
      template: 'index.html.ejs',
      favicon: 'assets/buggerBIG.svg',
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'assets', '*.json')},
        {from: path.resolve(__dirname, 'assets', 'malafly', '*_m.jpg')}
      ]
    })
  ],
};
