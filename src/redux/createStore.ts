import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducer'

const middlewares = [thunk, logger]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store