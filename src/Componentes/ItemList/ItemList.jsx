import Item from '../Item/Item';
import './ItemList.css';
import PropTypes from 'prop-types';

function ItemList({ productos }) {
  return (
    <div className="ItemList__items">
      {productos.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
}

ItemList.propTypes = {
  productos: PropTypes.array.isRequired,
};

export default ItemList;
