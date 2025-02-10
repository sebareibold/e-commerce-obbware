import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import "../ItemDetialContainer/ItemDetialContainer.css";
import "./CartContainer.css"
import { Link } from 'react-router-dom';


const CartContainer = () => {
    const { carrito, cantidadTotal, precioTotal, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);

    return (
        <div className='cart-container'>
            <h2 className='titulo-cart-container fontStyle'>Carrito de Compras</h2>

            {carrito.length === 0 ? (<p className='fontStyle vacio'>El carrito está vacío.</p>) :
                (<>
                    <ul className='item-cart-container'>
                        {carrito.map(({ item, cantidad }) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className='container'>
                                <div className="box">
                                    <li className="fontStyle" key={item.id}>
                                        <h3 className='text'>{item.nombre}</h3>
                                        <p>Precio: ${item.precio}</p>
                                        <p>Cantidad: {cantidad}</p>
                                        <button className='btn-cart-container btn-eliminar' onClick={() => eliminarProducto(item.id)}> <p className='fontStyle'>Eliminar</p></button>
                                    </li>
                                </div>
                            </div>
                        ))}
                    </ul>

                    <h3 className='fontStyle texto-inferior' >Total de productos: {cantidadTotal}</h3>
                    <h3 className='fontStyle texto-inferior'>Precio total: ${precioTotal}</h3>
                    <div className='espacio'>
                        <button className='btn-cart-container vaciar' onClick={vaciarCarrito}><p className='fontStyle sizefont-end'>Vaciar Carrito</p></button>
                        <Link to="/checkout" className="btn-cart-container comprar fontStyle sizefont-end">Comprar</Link>
                    </div>
                </>
                )}

        </div>
    );
};

export default CartContainer;
