import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext'; 
import carritoImg from './carrito-de-compras.png';

function CartWidget() {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <Link to="/carrito" style={{ position: 'relative', display: 'inline-block' }}>
      <img  src={carritoImg} alt="carrito"  width="32" height="32" className='imagen-carrito' style={{ cursor: 'pointer' }} />
      {cantidadTotal > 0 && 
      ( 
        <span 
          style={{ position: 'absolute',top: '-1px', right: '6px', backgroundColor: '#212121', color: 'white', borderRadius: '500%', padding: '3px 4px',fontSize: '13px',fontWeight: 'bold'}}
        > {cantidadTotal} </span>
      )}
    </Link>
  );
}

export default CartWidget;
