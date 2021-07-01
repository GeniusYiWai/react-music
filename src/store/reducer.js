import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as rankReducer } from '@/pages/discover/c-pages/ranking/store'
const cReucer = combineReducers({
  recommend: recommendReducer,
  rank: rankReducer
})
export default cReucer
