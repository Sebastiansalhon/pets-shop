import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='cartshop'>
        <CartWidget/>
      </div>
      <div className='navlist'>
        <span>esto es la NavBar</span>
        <ul className='navlist'>
            <li className='navitem'>Inicio</li>
            <li className='navitem'>Sobre Nosotros</li>
            <li className='navitem'>Tienda</li>
            <li className='navitem'>Contacto</li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default NavBar