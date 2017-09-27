import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {autoRehydrate, persistStore} from 'redux-persist'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import newSearchEntry from './newSearchEntry'
import searches from './searches'
import gifs from './gifs'

const reducer = combineReducers({newSearchEntry, searches, gifs})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(
  reducer,
  undefined,
  compose(middleware, autoRehydrate())
)

persistStore(store)

export default store
export * from './newSearchEntry'
export * from './searches'
export * from './gifs'
