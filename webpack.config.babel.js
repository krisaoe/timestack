import path from 'path'
import webpack from 'webpack'

import {WDS_PORT} from './src/shared/config'
import {isProd} from './src/shared/util'

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: `http://localhost:${WDS_PORT}/dist/js`,
  },
  module: {
    rules: [
      { test: /\.(jsx|js)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: isProd ? false : 'source-map',
  stats: 'minimal',
  devServer: {
    port: WDS_PORT,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
