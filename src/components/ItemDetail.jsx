import React from "react";
import ItemCount from "./ItemCount";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  
  return (
    <div>
      {productos.map((p) => {
        return (
          <div key={p.id}>
            <Center p="1rem">
              <Card>
                <CardHeader>
                  <Heading size="md">{p.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{p.descripcion}</Text>
                  <Text>{p.precio}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount />
                </CardFooter>
              </Card>
            </Center>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
