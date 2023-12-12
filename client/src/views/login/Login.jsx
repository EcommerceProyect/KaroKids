import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices/user'

const Login = () => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setUser(userData))
  }

  return (
    <form>
      <label htmlFor="email">E-mail:</label>
      <input
        name="email"
        id="email"
        onChange={handleChange}
        className="border border-black rounded-md mx-1"
      ></input>

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        className="border border-black rounded-md mx-1"
      ></input>

      <button
        type="submit"
        onClick={handleSubmit}
        className="border border-black rounded-md mx-1 px-2 py-1"
      >
        Login!
      </button>
    </form>
  )
}

export default Login
