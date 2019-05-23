import { createStore } from 'redux';
// 引入开发工具插件
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer.js';
const store  = createStore(reducer, composeWithDevTools());

export default store;