import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import React from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import {Loader} from "./Loader"
const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const {categoria} = useParams()


useEffect (() => {
  const db = getFirestore()

  const itemsCollection = collection(db, `productos`)
  getDocs(itemsCollection).then((snapshot) => {
    const docs = snapshot.docs.map((doc) => doc.data())
    setProductos(docs)
  })
},[])




const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)

  return (

    productos.length === 0 ? <Loader/> : 
      categoria ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos}/> 
  );
};


export default ItemListContainer;
