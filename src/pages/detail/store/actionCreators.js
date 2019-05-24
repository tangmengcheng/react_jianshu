import axios from 'axios'
import * as actionTypes from './action-types'

const changeDetail = (title, content) => {
  return {
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
  }
}
export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then(res => {

      dispatch(changeDetail(res.data.data.title, res.data.data.content))

    }).catch(err => {
      console.log(err)
    })
  }
}