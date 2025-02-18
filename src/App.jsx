import { useState } from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes//ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import HomeSection from './Componentes/HomeSection/HomeSection';
import ContactSection from './Componentes/ContactSection/ContactSection';
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
          <Route path="/" element={<HomeSection />} />
          <Route path="/productos" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/contactos" element={<ContactSection />} />
          <Route path="/carrito" element={<CartSection />} />
          <Route path="/checkout" element={<CheckoutSection />} />
        </Routes>

      </CarritoProvider>
    </Router>

  );
}

export default App;
