import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';


function Item({ id, nombre, categoria, precio, especificaciones, img }) {
  return (
    <div className="card">

      <div className="card-img">
        <img src={img} alt={nombre} className="img-item" />
      </div>

      <div className="card-title">{nombre}</div>

      <div className="card-text-item">
        <p className='text'>{especificaciones}</p>
      </div>


      <div className="card-footer">
        <div className="card-price">
          <span>US${precio}  </span> 
        </div>

        <button className="btn">
          <Link to={ `/productos/${id}` } className="btn-text">Ver Detalles</Link>
        </button>
      </div>
    </div>
  )
}

export default Item