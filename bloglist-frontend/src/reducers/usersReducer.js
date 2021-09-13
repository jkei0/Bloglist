import { getAllUsers } from '../services/users'
import { registerUser } from '../services/users'
import { setError, setNotification } from './notificationReducer'

export const initializeUsers = () => {
  return async dispatch => {
    const users = await getAllUsers()
    dispatch({
      type: 'INITIALIZE_USERS',
      data: users
    })
  }
}

export const register = ( username, name, password ) => {
  return async dispatch => {
    try {
      const user = {
        username: username,
        name: name,
        password: password
      }
      const res = await registerUser(user)
      dispatch ({
        type: 'REGISTER_USER',
        user: res
      })
      dispatch(setNotification(`${username} registered`))
    }
    catch (err) {
      dispatch(setError(err.message))
    }
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
  case 'INITIALIZE_USERS':
    return action.data
  case 'REGISTER_USER':
    return state.concat(action.user)
  }

  return state
}

export default reducer