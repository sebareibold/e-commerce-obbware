import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../../asyncmock";
import Loader from '../Loader/Loader';



function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    getProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="container">
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;


/*
  const [state, setState] = useState(0); // Inicializa con un valor numérico.
  - state: El estado actual
  - setState: La función para actualizar el estado,
    Al invocarla, React programará una nueva renderización del componente con el estado actualizado.

*/