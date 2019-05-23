import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// 引入开发工具插件
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer.js';

let composeEnhancers = compose(
  applyMiddleware(thunk),
  (window && window.window.__REDUX_DEVTOOLS_EXTENSION__) ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
)
// const store  = createStore(reducer, composeWithDevTools());
const store  = createStore(reducer, composeEnhancers);

export default store;