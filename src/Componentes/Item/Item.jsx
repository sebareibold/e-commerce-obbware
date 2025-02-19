import './Item.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  especificaciones: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Item;
