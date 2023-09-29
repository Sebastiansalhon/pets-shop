import React from "react";
import Item from "./Item";
import {Loader} from "./Loader"
const ItemList = ({ productos }) => {

const loading = []


  return (

    <div className="card">
      {
        loading ? <Item productos={productos}/> : <Loader/>
      }
    </div>
      )



  
};

export default ItemList;
