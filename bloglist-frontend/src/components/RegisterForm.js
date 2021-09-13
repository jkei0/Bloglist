import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../reducers/usersReducer'

const RegisterForm = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ name, setName ] = useState('')
  const dispatch = useDispatch()

  const handleRegister = (event) => {
    event.preventDefault()
    dispatch(register(username, name, password))
    setUsername('')
    setPassword('')
    setName('')
  }

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '200px'
  }

  const inputFieldStyle = {
    display: 'flex'
  }

  const nameInputStyle = {
    marginLeft: '26px',
  }

  return (
    <div style={divStyle}>
      <h2>Register new user</h2>
      <form onSubmit={handleRegister}>
        <div style={inputFieldStyle}>
          <div>Username</div>
          <input
            type='text'
            value={username}
            name='Username'
            onChange = {({ target }) => setUsername(target.value)}
          />
        </div>
        <div style={inputFieldStyle}>
          <div>Name</div>
          <input
            type='text'
            value={name}
            name='Name'
            onChange = {({ target }) => setName(target.value)}
            style={nameInputStyle}
          />
        </div>
        <div style={inputFieldStyle}>
          Password
          <input
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm