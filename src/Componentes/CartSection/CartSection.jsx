import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import "../ItemDetailContainer/ItemDetailContainer.css";
import "./CartSection.css";
import { Link } from 'react-router-dom';

const CartSection = () => {
    const { carrito, cantidadTotal, precioTotal, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);

    return (
        <div className='custom-cart-container'>
            <h2 className='custom-titulo-cart-container custom-fontStyle'>Carrito de Compras</h2>

            {carrito.length === 0 ? (
                <p className='custom-fontStyle custom-vacio'>El carrito está vacío.</p>
            ) : (
                <>
                    <ul className='custom-item-cart-container'>
                        {carrito.map(({ item, cantidad }) => (
                            <div className='custom-container' key={item.id}>
                                <div className="custom-box">
                                    <li className="custom-fontStyle">
                                        <div className='custom-container-name'>
                                            <h3>{item.nombre}</h3>
                                        </div>
                                        <p>Precio: ${item.precio}</p>
                                        <p>Cantidad: {cantidad}</p>
                                        <button className='custom-btn-cart-container custom-btn-eliminar' onClick={() => eliminarProducto(item.id)}>
                                            <p className='custom-fontStyle'>Eliminar</p>
                                        </button>
                                    </li>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div className="custom-container-end">
                        <h3 className='custom-fontStyle custom-texto-inferior'>Total de productos: {cantidadTotal}</h3>
                        <h3 className='custom-fontStyle custom-texto-inferior'>Precio total: ${precioTotal}</h3>
                        <div className='custom-espacio'>
                            <button className='custom-btn-cart-container custom-btn-end custom-vaciar' onClick={vaciarCarrito}>
                                <p className='custom-fontStyle custom-sizefont-end'>Vaciar Carrito</p>
                            </button>
                            <Link to="/checkout" className="custom-btn-cart-container custom-btn-end custom-comprar custom-fontStyle custom-sizefont-end">Comprar</Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartSection;
