import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchButton = () => {
  const [search, setSearch] = useState(false)

  const handleSearchClick = () => {
    setSearch(!search)
  }

  return (
    <div>
      {search ? (
        <input type="search" placeholder=" Buscar..." className="rounded-md" />
      ) : null}

      <button onClick={handleSearchClick}>
        <FaMagnifyingGlass />
      </button>
    </div>
  )
}

export default SearchButton
