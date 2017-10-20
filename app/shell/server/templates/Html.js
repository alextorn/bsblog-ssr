import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

import Head from './Head';
import Body from './Body';

const Html = ({ body, meta, scripts, styles }) => (
  <html lang="ru">
    <Head {...{ meta, styles }} />
    <Body {...{ body, scripts }} />
  </html>
);

export default props => {
  const html = ReactDOMServer.renderToStaticMarkup(<Html {...props} />);
  return `<!DOCTYPE html>${html}`;
};

Html.propTypes = {
  body: PropTypes.string,
  meta: PropTypes.string,
  styles: PropTypes.shape({
    app: PropTypes.string || null,
    vendor: PropTypes.string || null,
  }),
  scripts: PropTypes.shape({
    app: PropTypes.string,
    vendor: PropTypes.string,
    chunks: PropTypes.array,
    manifest: PropTypes.string,
  }),
};
