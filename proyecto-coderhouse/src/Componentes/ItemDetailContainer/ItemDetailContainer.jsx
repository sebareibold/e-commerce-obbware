import React from 'react'
import { useEffect, useState } from 'react'
import { getProducto } from '../../../asyncmock'
import ItemDetial from '../ItemDetial/ItemDetial'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null)

  useEffect(()=>{
    getProducto(1)
      .then(resp => setProducto(resp))
  },[])

  return (
    <div className='DetailContainer'><ItemDetial {...producto}/></div>
  )
}

function viewDetail(id){

}

export default ItemDetailContainer