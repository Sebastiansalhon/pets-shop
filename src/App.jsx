import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ItemList from "./components/ItemList";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category:id" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
