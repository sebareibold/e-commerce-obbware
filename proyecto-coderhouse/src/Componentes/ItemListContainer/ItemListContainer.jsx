import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList";
import {getProductos} from "../../../asyncmock";



function ItemListContainer() {

  const [productos, setProductos] =  useState([])

  useEffect(() => {
    getProductos()
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
  },[productos])

  return (
    <div class="container"> 
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer


  /*
    const [state, setState] = useState(0); // Inicializa con un valor numérico.
    - state: El estado actual
    - setState: La función para actualizar el estado,
      Al invocarla, React programará una nueva renderización del componente con el estado actualizado.

  */