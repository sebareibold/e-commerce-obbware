import { useState } from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetialContainer/ItemDetialContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './Componentes/HomeContainer/HomeContainer';
import ContactContainer from './Componentes/ContactContainer/ContactContainer';
import { CarritoProvider } from './Context/CarritoContext';
import CartSection from './Componentes/CartSection/CartSection';
import CheckoutSection from './Componentes/CheckoutSection/CheckoutSection'


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
          <Route path="/carrito" element={<CartSection />} />
          <Route path="/checkout" element={<CheckoutSection />} />
        </Routes>

      </CarritoProvider>
    </Router>

  );
}

export default App;
