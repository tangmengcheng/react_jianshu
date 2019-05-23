// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'

// redux-immutable 让最外层的state对象变成immutable对象
const reducer = combineReducers({
  header: headerReducer
})

export default reducer;