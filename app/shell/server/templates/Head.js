import React from 'react';
import PropTypes from 'prop-types';

const Head = ({ styles }) => (
  <head>
    <base href="/" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Belarus Security Blog</title>
    <meta name="keywords" content="аналитика" />

    <link rel="shortcut icon" href="/favicon.ico" />
    {styles.app && <link rel="stylesheet" href={styles.app} />}
  </head>
);

Head.propTypes = {
  styles: PropTypes.shape({
    app: PropTypes.string || null,
    vendor: PropTypes.string || null,
  }),
};

export default Head;
