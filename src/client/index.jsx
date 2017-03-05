import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

import App from './app'
import helloReducer from './reducer/hello'
import {APP_CONTAINER_SELECTOR} from '../shared/config'
import {isProd} from '../shared/util'

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({ hello: helloReducer }),
  isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* eslint-enable no-underscore-dangle */

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    /* eslint-disable global-require */
    const NextApp = require('./app').default
    /* eslint-enable global-require */
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
