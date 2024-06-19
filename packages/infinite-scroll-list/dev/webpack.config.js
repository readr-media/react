/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @typedef {import('webpack-dev-server/types/lib/servers').Configuration} DevServerConfiguration */
/** @typedef {import('webpack').Configuration} Configuration */

/** @type {DevServerConfiguration} */
const devServer = {
  hot: false,
  host: '0.0.0.0',
  port: 8080,
  watchFiles: [
    path.resolve(__dirname, '*.ts.'),
    path.resolve(__dirname, '*.tsx'),
    path.resolve(__dirname, '../src/*.ts.'),
    path.resolve(__dirname, '../src/*.tsx'),
  ],
}

/** @type {Configuration} */
const config = {
  devServer,
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './entry.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    modules: [__dirname, '..', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  devtool: 'eval-source-map',
}

module.exports = config
