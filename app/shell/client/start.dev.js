/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const renderApp = () => {
  hydrate(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', renderApp);
}
