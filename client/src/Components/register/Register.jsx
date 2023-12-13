import React, { useState } from 'react'
import Validation from './Validation'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    verifyPassword: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
    setErrors(
      Validation({
        ...userData,
        [e.target.name]: e.target.value,
      }),
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
        value={userData.name}
        onChange={handleChange}
      ></input>
      {errors.name ? <a>{errors.name}</a> : null}

      <label htmlFor="lastname">Apellido</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        onChange={handleChange}
        value={userData.lastname}
      ></input>
      {errors.lastname ? <a>{errors.lastname}</a> : null}

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        value={userData.email}
      ></input>
      {errors.email ? <a>{errors.email}</a> : null}

      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={userData.password}
      ></input>
      {errors.password ? <a>{errors.password}</a> : null}

      <label htmlFor="verifyPassword">Verificar contraseña</label>
      <input
        type="password"
        name="verifyPassword"
        id="verifyPassword"
        onChange={handleChange}
        value={userData.verifyPassword}
      ></input>
      {errors.verifyPassword ? <a>{errors.verifyPassword}</a> : null}

      <button type="submit">Registrar</button>
    </form>
  )
}

export default Register
