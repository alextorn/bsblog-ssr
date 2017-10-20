/* eslint-disable import/no-extraneous-dependencies */
import Koa from 'koa';
import webpack from 'webpack';
import koaWebpack from 'koa-webpack';
import buildConfig from '../config/webpack/client.dev';

const HOT_PORT = 3500;
let initialCompile = true;

const server = new Koa();
const wpcompiler = webpack(buildConfig);

server.use(
  koaWebpack({
    compiler: wpcompiler,
    dev: {
      publicPath: buildConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
      quiet: false,
      noInfo: false,
      lazy: false,
      stats: { colors: true },
    },
    hot: {
      compiler: wpcompiler,
    },
  }),
);

server.listen(
  HOT_PORT,
  error =>
    /* eslint-disable no-console */
    error
      ? console.log('=> OMG!!! 🙀 ', error)
      : console.log('=> 🔥  HOT server is running on port', HOT_PORT),
  /* eslint-enable no-console */
);

wpcompiler.plugin('done', () => {
  if (initialCompile) {
    initialCompile = false;
    // $FlowIgnoreMe
    process.send('compiled');
  }
});
