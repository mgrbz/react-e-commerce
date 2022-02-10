import React from 'react';
import reactDom from 'react-dom';
import ReactDOM  from 'react-dom';
import App from './app';

const rootElement = document.getElementById('root');


reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
