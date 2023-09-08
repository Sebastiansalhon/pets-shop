import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Flex>
          <Box bg="burlywood" p="4">
            <Link to={"/"}>
              <h3 className="brand">Pets Shop</h3>
            </Link>
          </Box>
          <Spacer bg="burlywood" />
          <Box bg="burlywood" p="4">
            <Menu>
              <MenuButton>
                <p className="menu">Categorias</p>
              </MenuButton>
              <MenuList>
                <MenuItem><Link to={`/categoria/${"Perros"}`}>Perros</Link></MenuItem>
                <MenuItem><Link to={`/categoria/${"Gatos"}`}>Gatos</Link></MenuItem>
                <MenuItem><Link to={`/categoria/${"Accesorios"}`}>Accesorios</Link></MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer bg="burlywood" />
          <Box bg="burlywood">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
