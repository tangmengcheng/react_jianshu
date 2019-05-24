import { fromJS } from 'immutable'
import * as actionTypes from './action-types'
const defaultState = fromJS({ // fromJS 变为immutable对象
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state 
  }
}