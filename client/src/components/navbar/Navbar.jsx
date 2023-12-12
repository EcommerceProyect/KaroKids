import React from 'react'
// components
import SearchButton from '../searchButton/SearchButton'
import DropDownMenu from '../dropDownMenu/DropDownMenu'

// icons
import Button from '../linkButtons/LinkButtons'
import logo from '../../assets/karokidslogo.png'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import {
  MdOutlineLogin,
  MdOutlineLogout,
  MdPersonOutline,
} from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-2">
      <img src={logo} alt="logo KaroKids" className="w-28" />

      <DropDownMenu />
      <SearchButton />
      <Button
        link="/login"
        icon={<MdOutlineLogin color="black" size={20} />}
        text="Iniciar Sesión"
      />

      <Button
        link="#"
        icon={<MdPersonOutline color="black" size={20} />}
        text="Perfil"
      />

      <Button
        link="#"
        icon={<LiaShoppingBagSolid color="black" size={20} />}
        text="Carrito de compras"
      />

      <Button
        link="#"
        icon={<MdOutlineLogout color="black" size={20} />}
        text="Cerrar sesión"
      />
    </nav>
  )
}

export default Navbar
