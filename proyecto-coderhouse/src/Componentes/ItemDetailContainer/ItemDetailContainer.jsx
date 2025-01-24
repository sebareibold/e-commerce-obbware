import React from 'react'
import { useEffect, useState } from 'react'
import { getProducto } from '../../../asyncmock'
import ItemDetail from '../ItemDetial/ItemDetial';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

  const { id } = useParams();
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    getProducto(Number(id)) //a numero
        .then(item => setProducto(item))
        .catch(error => console.error("Error al obtener el producto:", error));
}, [id]);

  return (
    <div className='DetailContainer'>
        {producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>}
    </div>
);
}


export default ItemDetailContainer

