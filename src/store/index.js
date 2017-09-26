import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import newSearchEntry from './newSearchEntry'
import searches from './searches'
import gifs from './gifs'

const reducer = combineReducers({newSearchEntry, searches, gifs})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './newSearchEntry'
export * from './searches'
export * from './gifs'
