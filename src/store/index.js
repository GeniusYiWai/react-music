import { createStore, applyMiddleware, compose } from 'redux'
import cReucer from './reducer'
import thunk from 'redux-thunk'
const componseEnhance = compose
const store = createStore(cReucer, componseEnhance(applyMiddleware(thunk)))
export default store
