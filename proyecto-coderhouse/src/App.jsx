import { useState } from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetialContainer/ItemDetialContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './Componentes/HomeContainer/HomeContainer';
import ContactContainer from './Componentes/ContactContainer/ContactContainer';
import { CarritoProvider } from './Context/CarritoContext';
import CartContainer from './Componentes/CartContainer/CartContainer';
import Checkout from './Componentes/Checkout/Checkout'


function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  return (

    <Router>
      <CarritoProvider>
        <Navbar setCategoriaSeleccionada={setCategoriaSeleccionada} />
        <Routes>
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/productos" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
          <Route path="/contactos" element={<ContactContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </CarritoProvider>
    </Router>

  );
}

export default App;
