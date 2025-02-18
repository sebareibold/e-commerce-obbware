import  { useContext, useState } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, nombre, categoria, precio, especificaciones, img }) => {

  const { agregarCarrito } = useContext(CarritoContext);

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const cambiadorDeCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
  };

  const sumarAlCarrito = () => {
    if (agregarCantidad != 0) {
      agregarCarrito({ id, nombre, categoria, precio, especificaciones, img }, agregarCantidad);
      setAgregarCantidad(0);
    }
  }

  return (
    <section className="custom-layout">
      <div className="custom-imagen">
        <img src={img} alt={nombre} className="custom-img" />
      </div>

      <div className="custom-Titulo">
        <p className="custom-titulo-text">{nombre}</p>
        <div className="custom-categoria">
          <p>{categoria}</p>
        </div>
      </div>

      <div className="informacion">
        <Especificaciones esp={especificaciones} />
      </div>

      <div className="precio-cantidad">
        <p className='precio-text'>US$ {precio}</p>
        <ItemCount id={id} initial={1} onChange={cambiadorDeCantidad} />
      </div>

      <div className="Boton">
        <button className="btn-detial now">
          <p className="btn-text-detial">Comprarlo ahora</p>
        </button>

        <button className="btn-detial" onClick={sumarAlCarrito}>
          <p className="btn-text-detial">Añadir al carrito</p>
        </button>

      </div>
    </section>
  );
};

function Especificaciones({ esp }) {
  const especificaciones = esp ? esp.split(',').map((item, index) => (
    <div key={index} className="especificacion">{item.trim()}</div>
  )) : null;
  return <div className="Especificaciones">{especificaciones}</div>;
}

export default ItemDetail;
