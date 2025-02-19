import { useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { CarritoContext } from "../../context/CarritoContext";
import "./ItemCount.css";

const ItemCount = ({ id, initial = 1, onChange }) => {
  const { carrito } = useContext(CarritoContext); 
  const [stockDisponible, setStockDisponible] = useState(10);
  const [cantidad, setCantidad] = useState(initial);

  useEffect(() => {
    const productoEnCarrito = carrito.find(prod => prod.item.id === id);
    const stockTotal = productoEnCarrito?.item?.stock?? 10;
    const cantidadEnCarrito = productoEnCarrito?.cantidad ?? 0;

    setStockDisponible(stockTotal - cantidadEnCarrito);
  }, [carrito, id]);

  useEffect(() => { onChange(cantidad);}, [cantidad, onChange]);

  const incrementar = () => {if (cantidad < stockDisponible) {setCantidad(prev => prev + 1);}};
  const decrementar = () => {if (cantidad > 1) {setCantidad(prev => prev - 1); }};

  return (
    <div className="cantidad">
      <span className="cantidad-text"> 
        Stock: {isNaN(stockDisponible) ? 0 : stockDisponible}, Cantidad Seleccionada: {cantidad}
      </span>
      <button className="btn-cantidad menos" onClick={decrementar}>-</button>
      <button className="btn-cantidad mas" onClick={incrementar}>+</button>
    </div>
  );
};

ItemCount.propTypes = {
  id: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default ItemCount;
