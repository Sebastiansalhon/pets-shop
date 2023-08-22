import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Spacer, Box,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
    <div className='navBar'>
    <Flex>
  <Box bg='aqua' p='4'>
      <h3 className='brand'>Pets Shop</h3>
  </Box>
  <Spacer bg='aqua' />
  <Box bg='aqua' p='4'>
<Menu >
  <MenuButton >
    <p className='menu'>Menu</p>
  </MenuButton>
  <MenuList>
    <MenuItem>Inicio</MenuItem>
    <MenuItem>Tienda</MenuItem>
    <MenuItem>Sobre Nosotros</MenuItem>
  </MenuList>
</Menu>
  </Box>
  <Spacer bg='aqua' />
    <Box bg='aqua'>
        <CartWidget/>
    </Box>
</Flex>
    </div>
    
    </>
  )
}

export default NavBar