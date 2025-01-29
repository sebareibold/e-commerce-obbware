import { useState } from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './Componentes/HomeContainer/HomeContainer';
import ContactContainer from './Componentes/ContactContainer/ContactContainer';
import { CarritoProvider } from './Context/CarritoContext';


function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  return (
      <CarritoProvider> 
      <Router>
        <Navbar setCategoriaSeleccionada={setCategoriaSeleccionada} />
        <Routes>
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/productos" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
          <Route path="/contactos" element={<ContactContainer />} />
        </Routes>
      </Router>
      </CarritoProvider>
  );
}

export default App;
