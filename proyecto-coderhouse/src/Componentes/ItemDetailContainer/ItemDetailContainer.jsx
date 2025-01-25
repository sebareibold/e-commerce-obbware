import React from 'react'
import { useEffect, useState } from 'react'
import { getProducto } from '../../../asyncmock'
import ItemDetail from '../ItemDetial/ItemDetial';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';


function ItemDetailContainer() {

  const { id } = useParams();
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);  
    getProducto(Number(id)) //a numero
      .then(item => {setProducto(item); setLoading(false); })
      .catch(error => {console.error("Error al obtener el producto:", error); setLoading(false); });
  }, [id]);
  
  if (loading) {
    return <Loader/>;// Indicador de carga.
  }

  return (
    <div className='DetailContainer'>
      {producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>}
    </div>
  );
}


export default ItemDetailContainer

