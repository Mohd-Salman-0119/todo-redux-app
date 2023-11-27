import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from './AuthReducer/reducer'
import { todoReducer } from './TodoReducer/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ AUTH: authReducer, TODO: todoReducer })

const middleware = applyMiddleware(thunk)

const store = legacy_createStore(rootReducer, middleware)


export { store }