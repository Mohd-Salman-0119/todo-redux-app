import { DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType"
import axios from 'axios'

// TODO GET METHODS
export const getTodoRequest = () => {
     return { type: GET_TODO_REQUEST }
}
export const getTodoSuccess = (payload) => {
     return { type: GET_TODO_SUCCESS, payload }
}
export const getTodoFailure = () => {
     return { type: GET_TODO_FAILURE }
}

// TODO POST METHODS
export const postTodoRequest = () => {
     return { type: POST_TODO_REQUEST }
}
export const postTodoSuccess = (payload) => {
     return { type: POST_TODO_SUCCESS, payload }
}
export const postTodoFailure = () => {
     return { type: POST_TODO_FAILURE }
}
// TODO DELETE METHODS
export const deleteTodoRequest = () => {
     return { type: DELETE_TODO_REQUEST }
}
export const deleteTodoSuccess = () => {
     return { type: DELETE_TODO_SUCCESS }
}
export const deleteTodoFailure = () => {
     return { type: DELETE_TODO_FAILURE }
}



// TODO API CALL METHOD

const apiUrl = `http://localhost:3098/todos`


export const fetchTodos = () => async (dispatch) => {
     try {
          dispatch(getTodoRequest())
          const res = await axios.get(apiUrl)
          dispatch(getTodoSuccess(res.data))
     } catch (error) {
          dispatch(getTodoFailure())
     }
}
export const addNewTodo = (payload) => async (dispatch) => {
     try {
          dispatch(postTodoRequest())
          const res = await axios.post(apiUrl, payload)
          dispatch(postTodoSuccess(res.data))
          console.log(res)
     } catch (error) {
          dispatch(postTodoFailure())
     }
}
export const deleteTodo = (id) => async (dispatch) => {
     try {
          dispatch(deleteTodoRequest())
          const res = await axios.delete(`${apiUrl}/${id}`)
          dispatch(deleteTodoSuccess())
     } catch (error) {
          dispatch(deleteTodoFailure())
     }
}
export const toggleTodo = (id, status) => async (dispatch) => {
     try {
          const res = await axios.patch(`${apiUrl}/${id}`, { status: !status })

     } catch (error) {
          console.log(error)
     }
}
export const editTodo = (id, payload, onSuccess) => async (dispatch) => {
     try {
          const res = await axios.put(`${apiUrl}/${id}`,payload)
          onSuccess()

     } catch (error) {
          console.log(error)
     }
}

