import React from "react";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

const mensaje2 = () =>{
  if(nombre !== '' && email !== '') {
    toast.success('Compra realizada con exito', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}
  


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();


  const handelSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    nombre,
    email,
  };

  const ordersCollection = collection(db, "orden");
 

  
  return (
    <>
        <form onSubmit={handelSubmit}>
    <div className="formulario">
      <FormControl onSubmit={handelSubmit}>
        <FormLabel>Nombre</FormLabel>
        <Input
          required
          placeholder="Nombre"
          type="text"
          onChange={(e) => setNombre(e.target.value)}
        />
        <FormLabel>Email</FormLabel>
        <Input
          required
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          />

        <Button colorScheme="orange" className="btnComprar" type="submit" onClick={mensaje2} >
          Realizar Compra
        </Button>
      </FormControl>
      <div>Tu Id es: {orderId}</div>
    </div>
    </form>

    <ToastContainer />
          </>
  );
};

export default Form;
