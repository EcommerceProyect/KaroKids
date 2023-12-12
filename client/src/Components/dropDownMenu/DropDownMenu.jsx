import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// icons
import { MdMenu } from 'react-icons/md'
import { FaUsers, FaRegQuestionCircle } from 'react-icons/fa'

const DropDownMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      <button onClick={handleMenuClick}>
        <MdMenu />
      </button>
      {openMenu ? (
        <ul>
          <Link>
            <FaUsers />
            <li>Quienes somos</li>
          </Link>
          <Link>
            <FaRegQuestionCircle />
            <li>Preguntas frecuentes</li>
          </Link>
        </ul>
      ) : null}
    </div>
  )
}

export default DropDownMenu
