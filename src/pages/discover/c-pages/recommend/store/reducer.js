import * as actionTypes from './constants'

const defaultState = {
  topBanners: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return { ...state, topBanners: action.banners }

    default:
      return state
  }
}

export default reducer