/**
 * create store
 */

import { createStore, compose, applyMiddleware } from 'redux'
import makeRootReducer from './reducers'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
const middlewareR = routerMiddleware(history);
const __DEV__ = process.env.NODE_ENV === 'development'

// 接受一个初始化参数，返回store
export default (initialState = {}, history) => {
  const middleware = [thunk]

  if (__DEV__) {
    middleware.push(require('redux-logger').default)
  }

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(makeRootReducer(), initialState, compose(
    applyMiddleware(...middleware,middlewareR),
    ...enhancers
  ))

  // 创建asyncReducers存放异步加载进来的state
  store.asyncReducers = {};
  window.store = store;
  return store
}
