import React from 'react'
import ReactDOM from 'react-dom'
import { fromJS } from 'immutable';
import createHistory from 'history/createHashHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './App';
import Root from './Root';
import configureStore from './redux/configureStore';

// import '../style/general.scss'
import render from 'mblock-react'

let initialState = {};

// rehydrate initialState for JS app
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;

  // Transform into Immutable.js collections,
  // but leave top level keys untouched for Redux
  Object
    .keys(initialState)
    .forEach((key) => {
      initialState[key] = fromJS(initialState[key]);
    });
}

const hashHistory = createHistory();
const store = configureStore(initialState, hashHistory);
const history = syncHistoryWithStore(hashHistory, store);


render(() => <Root history={history} routes={routes} store={store} />, 'root')

if (module.hot) {
  module.hot.accept()
}
