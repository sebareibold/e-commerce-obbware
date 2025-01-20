import React from 'react'
import './Item.css'


function Item({ id, nombre, categoria, precio, especificaciones, img }) {
  return (
    <div className="card">

      <div className="card-img">
        <img src={img} alt={nombre} className="img" />
      </div>

      <div className="card-title">{nombre}</div>

      <div className="card-text">
        <p className='text'>{especificaciones}</p>
      </div>


      <div className="card-footer">
        <div className="card-price">
          <span>$ {precio}</span> 
        </div>

        <button className="btn">
          <span className="btn-text">Ver Detalles</span>
        </button>
      </div>
    </div>
  )
}

export default Item