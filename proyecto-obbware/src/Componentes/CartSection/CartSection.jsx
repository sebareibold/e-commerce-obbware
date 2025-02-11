import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import "../ItemDetailContainer/ItemDetailContainer.css";
import "./CartSection.css"
import { Link } from 'react-router-dom';


const CartSection = () => {
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
                                        <div className='container-name'><h3 >{item.nombre}</h3> </div>
                                        <p>Precio: ${item.precio}</p>
                                        <p>Cantidad: {cantidad}</p>
                                        <button className='btn-cart-container btn-eliminar' onClick={() => eliminarProducto(item.id)}> <p className='fontStyle'>Eliminar</p></button>
                                    </li>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div className="container-end">
                        <h3 className='fontStyle texto-inferior' >Total de productos: {cantidadTotal}</h3>
                        <h3 className='fontStyle texto-inferior'>Precio total: ${precioTotal}</h3>
                        <div className='espacio'>
                            <button className='btn-cart-container vaciar' onClick={vaciarCarrito}><p className='fontStyle sizefont-end'>Vaciar Carrito</p></button>
                            <Link to="/checkout" className="btn-cart-container comprar fontStyle sizefont-end">Comprar</Link>
                        </div>
                    </div>
                </>
                )}

        </div>
    );
};

export default CartSection;
