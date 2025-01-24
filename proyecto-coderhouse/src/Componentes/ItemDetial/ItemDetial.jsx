import React from 'react'

const ItemDetial = ({ id, nombre, categoria, precio, especificaciones, img }) => {
  return (
    <div>
        <p>{nombre}</p>
        <p>{categoria}</p>
        <p>{precio}</p>
        <p>{especificaciones}</p>
    </div>
  )
}

export default ItemDetial
