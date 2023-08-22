import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a Pet Shop - La tienda para tus Mascotas"}/>
    </>
  )
}

export default App