import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';
import "./ItemListContainer.css";
import { db } from '../../Service/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const misProductos = categoriaSeleccionada
      ? query(collection(db, "productos"), where("categoria", "==", categoriaSeleccionada))
      : query(collection(db, "productos"));

    setLoading(true);

    getDocs(misProductos)
      .then(res => {
        if (controller.signal.aborted) return;
        const nuevoProductos = res.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(nuevoProductos);
      })
      .catch(error => console.error(error))
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [categoriaSeleccionada]);

  return (
    <div className="container">
      {loading ? <Loader /> : <ItemList productos={productos} />}
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