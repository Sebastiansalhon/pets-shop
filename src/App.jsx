import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Loader } from "./components/Loader";
// import { CartContext } from "./context/CartContext";

const App = () => {



  return (

    <>
      <BrowserRouter>
      {/* <CartContext> */}
        <NavBar />
        <Routes>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      {/* </CartContext> */}
      </BrowserRouter>
    </>

    // <Loader/>
  );
};

export default App;
