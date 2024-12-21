
import './App.css'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {
  {/*Primer entrega*/}
  const ItemListInstant = "Lista de Productos";

  return (
    <>
      <Navbar/>
      <ItemListContainer ItemListInstant={ItemListInstant} />
    </>
  )
}

export default App
