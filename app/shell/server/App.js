import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { flushWebpackRequireWeakIds } from 'react-loadable';

import routes from '../routes';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import Error from './templates/Error';
import getHtml from './templates/Html';
import { getAsset, getChunks } from './utils';
import styles from 'app/assets/styles/index.css';

export default async ctx => {
  const context = {};

  let body;
  try {
    body = ReactDOMServer.renderToString(
      <StaticRouter location={ctx.url} context={context}>
        <div className={styles.app}>
          <Header />
          <main className={styles.content} role="main">
            <Switch>
              {routes.map(route => <Route {...route} key={ctx.url} />)}
              <Route
                render={({ staticContext }) => {
                  // eslint-disable-next-line no-param-reassign
                  if (staticContext) staticContext.status = 404;
                  return <div />;
                }}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </StaticRouter>,
    );
  } catch (err) {
    ctx.status = err.status || 500;
    const html = ReactDOMServer.renderToStaticMarkup(
      <Error status={ctx.status} message={err.message} />,
    );
    ctx.body = html;
    return;
  }

  if (context.status === 404) {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Error status={404} message="Запрашиваемая страница не найдена. " />,
    );
    ctx.status = 404;
    ctx.body = html;
    return;
  }

  const renderedModules = flushWebpackRequireWeakIds();
  const chunks = getChunks(renderedModules);

  const html = getHtml({
    body,
    meta: context.meta,
    styles: {
      app: __DEV__ ? null : getAsset('app.css'),
      // vendor: __DEV__ ? null : getAsset('vendor.css'),
    },
    scripts: {
      app: getAsset('app.js'),
      vendor: getAsset('vendor.js'),
      manifest: getAsset('manifest.js'),
      chunks: chunks.map(chunk => getAsset(`${chunk}.js`)),
    },
  });

  ctx.body = html;
};
