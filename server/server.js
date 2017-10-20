import Koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import serve from 'koa-static';
import App from 'app/shell/server/App';

const WEB_PORT = 3000;

const server = new Koa();

function headersMiddleware() {
  return async function headersMiddlewareHandler(ctx, next) {
    try {
      ctx.set('etag', 'weak');
      ctx.set('x-powered-by', false);
      ctx.set('Cache-Control', 'private, no-cache');
    } catch (e) {
      console.log(e);
    }
    return next();
  };
}

server
  .use(logger())
  .use(headersMiddleware())
  .use(serve(path.join(__dirname, '../build')))
  .use(async (ctx, next) => {
    console.log('Run app');
    await App(ctx, next);
    next();
  });

server.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('=> 🚀  WEB server is running on port', WEB_PORT);
});
