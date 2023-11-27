import { DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType"

const initialState = {
     todos: [],
     isLoading: false,
     isError: false,
}

const todoReducer = (state = initialState, { type, payload }) => {
     switch (type) {
          // GET 
          case GET_TODO_REQUEST: return { ...state, isLoading: true }
          case GET_TODO_SUCCESS: return { ...state, isLoading: false, todos: payload }
          case GET_TODO_FAILURE: return { ...state, isError: true }

          // POST
          case POST_TODO_REQUEST: return { ...state, isLoading: true }
          case POST_TODO_SUCCESS: return { ...state, isLoading: false, todos: [...state.todos, payload] }
          case POST_TODO_FAILURE: return { ...state, isError: true }

          // DELETE
          case DELETE_TODO_REQUEST: return { ...state, isLoading: true }
          case DELETE_TODO_SUCCESS: return { ...state, isLoading: false}
          case DELETE_TODO_FAILURE: return { ...state, isError: true }


          default: return initialState
     }
}

export { todoReducer }