import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER } from "./actionType"

const initialState = {
     token: "",
     isLoading: false,
     isError: false,
     isAuth: false
}

const authReducer = (state = initialState, {type, payload}) => {
     switch(type){
          case LOGIN_REQUEST: return {...state, isLoading: true}
          case LOGIN_SUCCESS: return {...state, isLoading: false, token: payload, isAuth: true}
          case LOGIN_FAILURE: return {...state, isError: true}

          case LOGOUT_USER: return initialState
          default: return state
     }
}

export {authReducer}
