import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({ productos }) {
  return (

    <div className="ItemList__items">
      {productos.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
}

export default ItemList;