import webpack from 'webpack';
import ModulesManifestPlugin from './plugins/ModulesManifestPlugin';
import { locations, modules } from '../index';

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-hot-middleware/client?path=${locations.hotServerUrl}/__webpack_hmr`,
      './app/shell/client/start.dev',
    ],
  },
  output: {
    path: locations.assets,
    publicPath: `${locations.hotServerUrl}${locations.assetsPublicUrl}`,
    filename: `${modules.devFilename}.js`,
    chunkFilename: `${modules.devChunkFilename}.js`,
  },
  context: locations.src,
  devtool: '#cheap-module-eval-source-map',
  module: {
    noParse: modules.minifiedJs,
    rules: [
      {
        test: modules.jsModule,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'client:dev',
            cacheDirectory: true,
          },
        },
      },
      {
        test: modules.cssModule,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]__[local]__[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: modules.cssModule,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({ __DEV__: true }),
    new ModulesManifestPlugin({
      path: locations.assets,
      filename: modules.modulesManifestFilename,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      // NB: `async` doesn't work, b/c this additional chunk must be sent to the client
      //     along w/ rendered post chunk. It might be possible to track it down
      //     in context of specific app, but it doesn't worth it for _this_ app.
      // async: true,
      minChunks: 2,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
      progress: true,
      options: { context: locations.src },
    }),
  ],
};
