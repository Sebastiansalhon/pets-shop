import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
    <CartWidget/>
    <div>
        <span>esto es la NavBar</span>
        <ul>
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Tienda</li>
            <li>Contacto</li>
        </ul>
    </div>
    
    </>
  )
}

export default NavBar