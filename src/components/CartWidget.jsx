import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {

    const {productosTotales} = useContext(CartContext);




  return (
    <>
      <div className="cartShop">
        <span className="material-symbols-outlined">shopping_bag</span>
        <span className="cartItems">{productosTotales()|| ''}</span>
      </div>
    </>
  );
};

export default CartWidget;
