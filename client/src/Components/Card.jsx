import React from 'react'

function Card({ nombre, categoria, talle, precio }) {
  return (
    <div>
      <h2>Nombre:{nombre}</h2>
      <h2>Categoria:{categoria}</h2>
      <h2>Talle:{talle}</h2>
      <h2>Precio:{precio}</h2>
    </div>
  )
}
export default Card
