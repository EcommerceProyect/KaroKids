import { Link } from 'react-router-dom'
import React from 'react'

const Button = ({ link, text, icon }) => {
  return (
    <Link to={link}>
      <button>
        {icon}
        <br />
        {text}
      </button>
    </Link>
  )
}

export default Button
