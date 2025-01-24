
import './App.css'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter as Router, Routes, Route, useParams  } from 'react-router-dom';


function App() {
  {/*Segunda entrega*/ }

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/productos" element={<ItemListContainer />} />

          {/* Ruta para los detalles de un ítem */}
          <Route path="/productos/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
