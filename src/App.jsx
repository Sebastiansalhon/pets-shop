import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <>
    <div className="nav-bar">
    <NavBar/>
    </div>
    <div className="item-list-container">
    <ItemListContainer/>
    </div>
    </>
  )
}

export default App