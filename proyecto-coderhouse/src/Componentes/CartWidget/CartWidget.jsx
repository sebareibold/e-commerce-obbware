import { Link } from 'react-router-dom';
import carritoImg from './carrito-de-compras.png';

function CartWidget() {
  return (
    <Link to="/carrito">
      <img 
        src={carritoImg} 
        alt="carrito" 
        width="32" 
        height="32" 
        className='imagen-carrito' 
        style={{ cursor: 'pointer' }} 
      />
    </Link>
  );
}

export default CartWidget;
