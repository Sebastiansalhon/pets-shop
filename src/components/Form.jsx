import React from "react";
import { useState } from "react";
import {collection, addDoc, getFirestore} from "firebase/firestore"
const Form = () => {

const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [orderId, setOrderId] = useState(null)

const db = getFirestore()


const handelSubmit = (e)=> {
  e.preventDefault()
  nombre === "" ? alert("Campo de nombre Vacio") : alert(`Gracias por su compra ${nombre}`)
  email === "" ? alert("Ingrese correo para comprar") : alert(`Factura enviada a ${email}`)

  addDoc(ordersCollection, order).then(({id}) => setOrderId(id))

}

const order = {
  nombre, email
}

const ordersCollection = collection(db, "orden")



  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Realizar compra</button>

      </form>
      <div>Tu Id es: {orderId}</div>
    </>
  );
};

export default Form;
