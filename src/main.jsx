import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './main.css'




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDEg4DMrMlPxh4ShMuG89jqS0ygpI7tF8",
  authDomain: "pets-shop-proyectoreact.firebaseapp.com",
  projectId: "pets-shop-proyectoreact",
  storageBucket: "pets-shop-proyectoreact.appspot.com",
  messagingSenderId: "100854564994",
  appId: "1:100854564994:web:87cc5f403605923f388c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>

    <App />

</ChakraProvider>
)
