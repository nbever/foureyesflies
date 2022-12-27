const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

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
        test: /\.(png|jpg|gif)$/i,
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
      title: 'Know Your Customer',
      template: 'index.html.ejs',
      favicon: 'assets/rally_hug_onion.svg',
    }),
  ],
};
