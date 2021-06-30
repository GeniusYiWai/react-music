import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
const cReucer = combineReducers({
  recommend: recommendReducer
})
export default cReucer
