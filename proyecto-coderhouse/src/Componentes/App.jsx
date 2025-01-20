
import './App.css'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  {/*Primer entrega*/ }
  const ItemListInstant = "Lista de Productos";

  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App
