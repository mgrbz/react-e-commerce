import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store/store';

const rootElement = document.getElementById('root');


reactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>,
  rootElement
);
