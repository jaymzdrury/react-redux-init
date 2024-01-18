import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducer'

const middlewares = [thunk, logger]
const store = createStore(reducer, applyMiddleware(...middlewares))

export default store