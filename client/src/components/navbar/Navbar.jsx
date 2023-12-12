import React from 'react'
import Button from '../linkButtons/LinkButtons'
import { MdOutlineLogin } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav>
      <input type="search" placeholder="Search..." />
      <Button link="/login" icon={<MdOutlineLogin />} text="Iniciar Sesion" />
      hello
    </nav>
  )
}

export default Navbar
