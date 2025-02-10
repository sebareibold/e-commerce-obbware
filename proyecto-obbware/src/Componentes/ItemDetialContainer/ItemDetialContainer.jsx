import React from 'react'
import { useEffect, useState } from 'react'
//import { getProducto } from '../../../asyncmock'
import ItemDetail from '../ItemDetial/ItemDetial';
import './ItemDetialContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { db } from '../../Service/config';
import { doc, getDoc } from "firebase/firestore";


function ItemDetailContainer() {

  const { id } = useParams();
  console.log(id);
  const [producto, setProducto] = useState(null)

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const nuevoDoc = doc(db, "productos", id);
    setLoading(true);
    getDoc(nuevoDoc)
      .then(res => {
        setLoading(false);
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      {loading ? <Loader /> : <div className='DetailContainer'><ItemDetail {...producto} />    </div>
      }
    </>
  );
}


export default ItemDetailContainer

