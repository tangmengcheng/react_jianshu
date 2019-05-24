import { fromJS } from 'immutable'
import * as actionTypes from './action-types'
const defaultState = fromJS({ // fromJS 变为immutable对象
  topList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addHomeList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
      // state.set('topList', fromJS(action.topList))
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state, action)
    // return state.set('articleList', state.get('articleList').concat(action.list))
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state 
  }
}