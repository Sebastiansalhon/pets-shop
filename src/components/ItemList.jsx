import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {


  return (

    <div className="card">
      <Item productos={productos}/>
    </div>
      )



  
};

export default ItemList;
