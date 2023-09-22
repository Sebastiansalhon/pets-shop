import React from "react";
import ItemDetail from "./ItemDetail";
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore, getDocs, collection} from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";


const ItemDetailContainer = () => {
const {id} = useParams()
const [producto, setProducto] = useState([])



useEffect(()=>{
  const db = getFirestore()
  const itemsCollection = collection(db, "productos")
  getDocs(itemsCollection).then((snapshot) => {
    const docs = snapshot.docs.map((doc) => doc.data())
    setProducto(docs)
  })
},[])


const productoFiltrado = producto.filter((producto) => producto.id == id)




  return (
    <div className="detailCard">
      {
        productoFiltrado.length > 0 ?
        productoFiltrado.map(p => {
          return(
            <ItemDetail producto={p}/>
            )
          })
          : <Loader/>
        }
        </div>

    

    )}

export default ItemDetailContainer;
