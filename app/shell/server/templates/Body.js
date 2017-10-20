import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ body, scripts }) => (
  <body>
    <div
      id="app"
      dangerouslySetInnerHTML={{ __html: body }} // eslint-disable-line react/no-danger
    />
    <script src={scripts.manifest} defer />
    <script src={scripts.vendor} defer />
    {scripts.chunks.map(chunk => <script key={chunk} src={chunk} defer />)}
    <script src={scripts.app} defer />
  </body>
);

Body.propTypes = {
  body: PropTypes.string,
  scripts: PropTypes.shape({
    manifest: PropTypes.string || null,
    vendor: PropTypes.string || null,
    chunks: PropTypes.array || null,
    app: PropTypes.string || null,
  }),
};

export default Body;
