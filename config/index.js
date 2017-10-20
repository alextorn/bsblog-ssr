import path from 'path';

const www = 'www';
const src = process.cwd();

export const WEB_HOSTNAME = process.env.WEB_HOSTNAME;

export const locations = {
  src,
  public: path.join(www, 'public'),
  assets: path.join(src, 'build', 'assets'),
  serverBuild: path.join(src, 'build'),
  hotServerUrl: 'http://localhost:3500',
  assetsPublicUrl: '/assets/',
};

export const modules = {
  jsModule: /\.js$/,
  cssModule: /\.css$/,
  minifiedJs: /\.min\.js$/,
  image: [/\.jpe?g$/, /\.png$/],
  animatedGif: /\.gif$/,

  devFilename: '[name]',
  devChunkFilename: '[id]',
  prodFilename: '[name].[chunkhash]',
  prodChunkFilename: '[id].[chunkhash]',
  appProdCssFilename: 'app.[contenthash].css',
  vendorProdCssFilename: 'vendor.[contenthash].css',
  assetFilename: '[hash].[ext]',

  devCssModuleClassName: '[path]__[local]__[hash:base64:5]',
  prodCssModuleClassName: '[hash:base64]',

  modulesManifestFilename: 'modules.manifest.json',
  assetsManifestFilename: 'assets.manifest.json',

  assetInlineLimit: 10000,
};
