import { useState } from 'react';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes//ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import HomeSection from './componentes/HomeSection/HomeSection';
import ContactSection from './componentes/ContactSection/ContactSection';
import { CarritoProvider } from './Context/CarritoContext';
import CartSection from './componentes/CartSection/CartSection';
import CheckoutSection from './componentes/CheckoutSection/CheckoutSection'


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
