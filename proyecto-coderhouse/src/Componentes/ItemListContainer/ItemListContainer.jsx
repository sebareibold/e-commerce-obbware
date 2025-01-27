import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../../asyncmock";
import Loader from '../Loader/Loader';
import "./ItemListContainer.css"


function ItemListContainer({ categoriaSeleccionada }) {

  const [productos, setProductos] = useState([]);

  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const [loading, setLoading] = useState(true);

  const filtrarProductos = () => {
    const filtrados = productos.filter((producto) =>
      categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true
    );
    console.log(categoriaSeleccionada);
    setProductosFiltrados(filtrados);
  };

  useEffect(() => {
    filtrarProductos();
  }, [categoriaSeleccionada, productos]); // Asegúrate de volver a filtrar cuando los productos cambien

  useEffect(() => {
    setLoading(true);
    getProductos()
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container">
      <ItemList productos={productosFiltrados} />
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