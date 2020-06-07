import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

const root = document.getElementById('root')
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}></Route>
  </Router>,
  root);

serviceWorker.register();