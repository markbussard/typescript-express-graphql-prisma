/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve('src')
    }
  }
};
