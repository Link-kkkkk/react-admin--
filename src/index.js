import React from 'react';
import ReactDom from 'react-dom';

// import {Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const store = {}

ReactDom.render(
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
