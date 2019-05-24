import axios from 'axios';
import * as actionTypes from './action-types'
import { fromJS } from 'immutable'
const changeHomeDate = (data) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: data.topList,
    articleList: data.articleList,
    recommendList: data.recommendList
  }
}

const addHomeList = (data, nextPage) => {
  return {
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(data),
    nextPage
    // list: List(data)  // 两者都可以将普通的数组转换为immutable数组
  }
}
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      if(res.data.success) {
        const action = changeHomeDate(res.data.data)
        dispatch(action)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      if(res.data.success) {
        const action = addHomeList(res.data.data, page + 1)
        dispatch(action)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const toggleTopShow = (show) => {
  return {
    type: actionTypes.TOGGLE_TOP_SHOW,
    show
  }
}