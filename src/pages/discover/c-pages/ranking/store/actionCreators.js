import * as actionTypes from './constants'
import { getTopList } from '@/services/recommend'

const setCurrentListAction = res => {
  return {
    type: actionTypes.SET_CURRENT_LIST,
    list: res.playlist
  }
}

export const setCurrentList = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      dispatch(setCurrentListAction(res))
    })
  }
}
