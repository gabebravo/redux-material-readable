import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // import redux
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'; // import react-redux Provider

import reducer from './reducers'; // import the reducers
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// dev only - remove this in production 
import logger from 'redux-logger';
const freeze = require('redux-freeze')

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, freeze)
) // NOTE : the 2nd param is what allows Redux debugging in chrome

ReactDOM.render(
  <Provider store={store}>
    <App/> 
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
