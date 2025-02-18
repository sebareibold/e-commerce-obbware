import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({ id, nombre, categoria, precio, especificaciones, img }) {
  return (
    <div className="custom-card">
      <div className="custom-card-img">
        <img src={img} alt={nombre} className="custom-img-item" />
      </div>
      <div className="custom-card-title">{nombre}</div>
      <div className="custom-card-text-item">
        <p className='custom-text'>{especificaciones}</p>
      </div>
      <div className="custom-card-footer">
        <div className="custom-card-price">
          <span>US${precio}  </span> 
        </div>
        <button className="custom-btn">
          <Link to={ `/productos/${id}` } className="custom-btn-text">Ver Detalles</Link>
        </button>
      </div>
    </div>
  );
}

export default Item;
