import * as actionTypes from './constants'

const defaultState = {
  topBanners: [],
  recommendList: [],
  newAlbums: [],
  rankList:[]
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return { ...state, topBanners: action.banners }
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return { ...state, recommendList: action.recommends }
    case actionTypes.CHANGE_NEW_ALBUM:
      return { ...state, newAlbums: action.newAlbum }
      case actionTypes.CHANGE_RANK:
        
        return { ...state, rankList: state.rankList.concat([action.list])}
    default:
      return state
  }
}

export default reducer
