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
    <Flex>
  <Box p='4'>
      <h3>Pets Shop</h3>
  </Box>
  <Spacer />
  <Box p='4'>
<Menu>
  <MenuButton >
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>Inicio</MenuItem>
    <MenuItem>Tienda</MenuItem>
    <MenuItem>Sobre Nosotros</MenuItem>
  </MenuList>
</Menu>
  </Box>
  <Spacer/>
    <Box>
        <CartWidget/>
    </Box>
</Flex>
    
    </>
  )
}

export default NavBar