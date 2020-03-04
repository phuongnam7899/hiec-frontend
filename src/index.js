import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const store = createStore(rootReducer,applyMiddleware(loadingBarMiddleware({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    scope: 'sectionBar',
  })))

ReactDOM.render(
    <Provider store={store}><App    /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
