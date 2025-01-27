import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  return (
    <Router>
      <Navbar setCategoriaSeleccionada={setCategoriaSeleccionada} />
      <Routes>
        <Route path="/productos" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
