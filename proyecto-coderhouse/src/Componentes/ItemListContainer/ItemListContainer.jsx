import React from 'react'
import './ItemListContainer.css'

function ItemListContainer(elemento) {
  return (
    <div class="container"> 
        <p>{elemento.ItemListInstant}</p>
    </div>
  )
}

export default ItemListContainer