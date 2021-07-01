import * as actionTypes from './constants'
const defaultState = {
  currentList: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_LIST:
      return { ...state, currentList: action.list }

    default:
      return state
  }
}
