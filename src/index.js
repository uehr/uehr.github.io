import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
