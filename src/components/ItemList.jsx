import React from "react";
import Item from "./Item";
import { Flex, Spacer, } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return (
        <Item producto={p} />
      )})}
    </>
  );
};

export default ItemList;
