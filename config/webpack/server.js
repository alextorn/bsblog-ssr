import webpack from 'webpack';
import getNodeExternals from 'webpack-node-externals';
import { locations, modules } from '../index';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default {
  entry: { app: './server/server' },

  output: {
    path: locations.serverBuild,
    filename: '[name].js',
    libraryTarget: 'commonjs',
    publicPath: isDevelopment
      ? `${locations.hotServerUrl}${locations.assetsPublicUrl}`
      : locations.assetsPublicUrl,
  },
  target: 'node',
  externals: [
    // 'react-loadable' is stateful and must be included in the build
    // to handle SSR + code splitting properly.
    // Also, we don't want requiring external css on the server.
    getNodeExternals({
      whitelist: ['react-loadable', /.*\.css$/],
    }),
  ],
  node: {
    __dirname: true,
    __filename: true,
  },

  context: locations.src,
  devtool: '#sourcemap',
  resolve: { extensions: ['.js'] },

  module: {
    noParse: modules.minifiedJs,
    rules: [
      {
        test: modules.jsModule,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'server',
            cacheDirectory: true,
          },
        },
      },
      {
        test: modules.cssModule,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: isDevelopment
                ? modules.devCssModuleClassName
                : modules.prodCssModuleClassName,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: modules.cssModule,
        include: /node_modules/,
        use: 'css-loader/locals',
      },
    ],
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({ __DEV__: isDevelopment }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: false,
      progress: true,
      options: { context: locations.src },
    }),
  ],
};
