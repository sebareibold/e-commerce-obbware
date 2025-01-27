import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer/HomeContainer';
import ContactContainer from './ContactContainer/ContactContainer';

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  return (
    <Router>
      <Navbar setCategoriaSeleccionada={setCategoriaSeleccionada} />
      <Routes>
        <Route path="/home" element={<HomeContainer />}/>
        <Route path="/productos" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
        <Route path="/contactos" element={<ContactContainer />}/>
      </Routes>
    </Router>
  );
}

export default App;
