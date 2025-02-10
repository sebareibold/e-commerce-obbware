import React, { useContext, useState } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import "./ItemDetial.css";

const ItemDetial = ({ id, nombre, categoria, precio, especificaciones, img }) => {

  const { agregarCarrito } = useContext(CarritoContext);

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const sumarAlCarrito = () => {
    if(agregarCantidad!=0){
      agregarCarrito({ id, nombre, categoria, precio, especificaciones, img }, agregarCantidad);
      setAgregarCantidad(0);
    }
  }

  const sumarCantidad = () => {
    setAgregarCantidad(agregarCantidad+1);
  }
  const restarCantidad = () => {
    if(agregarCantidad>0){
      setAgregarCantidad(agregarCantidad-1);
    }
  }


  return (
    <section className="layout">
      <div className="Imagen">
        <img src={img} alt={nombre} className="img" />
      </div>

      <div className="Titulo">
        <p className="titulo-text">{nombre}</p>
        <div className="Categoria">
          <p>{categoria}</p>
        </div>
      </div>

      <div className="informacion">
        <Especificaciones esp={especificaciones} />
      </div>

      <div className="precio-cantidad">

        <p className='precio-text'>US$ {precio}</p>

        <div className="cantidad">
          <p className='cantidad-text'>Cantidad En Interes: {agregarCantidad} </p>
          <div className='btn-cantidad-container'>
            <button className="btn-cantidad menos" onClick={restarCantidad}>
              <p className="btn-text-detial">-</p>
            </button>
            <button className="btn-cantidad mas" onClick={sumarCantidad}>
              <p className="btn-text-detial">+</p>
            </button>
          </div>
        </div>
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

export default ItemDetial;
