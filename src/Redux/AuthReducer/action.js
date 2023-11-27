import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER } from "./actionType"
import axios from 'axios'
export const loginRequest = () => {
     return { type: LOGIN_REQUEST }
}
export const loginSuccess = (payload) => {
     return { type: LOGIN_SUCCESS, payload }
}
export const loginFailure = () => {
     return { type: LOGIN_FAILURE }
}

export const logoutRequest = () => {
     return { type: LOGOUT_USER }
}

export const postUser = (payload, onSuccess) => async (dispatch) => {
     try {
          dispatch(loginRequest())
          const res = await axios.post(`https://reqres.in/api/login`,payload)
          dispatch(loginSuccess(res.data.token))
          onSuccess()
     } catch (error) {
          dispatch(loginFailure())
     }
}



