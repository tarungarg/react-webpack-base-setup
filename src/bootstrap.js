import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';

const mount = (el, { path, actionToPerform }) => {
  if (actionToPerform) {
    actionToPerform();
  }
  ReactDOM.render(<App path={path} />, el);
};

if (process.env.NODE_ENV == 'development') {
  const devRoot = document.querySelector('#root');
  if (devRoot) {
    mount(devRoot);
  }
}

window.mount = mount;
