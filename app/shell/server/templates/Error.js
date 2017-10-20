import React from 'react';
import PropTypes from 'prop-types';
import { oneLine } from 'common-tags';

const Error = ({ status, message }) => (
  <html lang="en">
    <head>
      <base href="/" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{status} - Belarus Security Blog</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <style type="text/css">
        {oneLine`
          html,
          body {
          height: 100%;
          }

          body {
          display: table;
          width: 100%;
          margin: 0;
          text-align: center;
          background-color: #141414;
          color: #fff;
          }

          a {
          color: #b88b58;
          text-decoration: none;
          }

          .error {
          display: table-cell;
          vertical-align: middle;
          }

          .error-status {
          color: #b88b58;
          font-size: 120px;
          font-weight: bold;
          font-family: ${'Helvetica Neue'}, sans-serif;
          border-bottom: 2px solid #b88b58;
          }

          .error-message {
          font-size: 20px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="error">
        <span className="error-status">{status}</span>
        <p className="error-message">
          {message}
          <a href="/"> Вернуться на главную</a>
        </p>
      </div>
    </body>
  </html>
);

Error.propTypes = {
  status: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Error;
