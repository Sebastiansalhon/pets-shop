import { useState, useContext } from "react";
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
  Stack,
  Image,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  
  const {agregarAlCart} = useContext(CartContext)

  const [irAlCart, setIrAlCart] = useState(false)

  
  const onAdd = (quantity) => {
    setIrAlCart(true);
    agregarAlCart(producto, quantity);
  }
  
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image src={producto.imagen} alt="" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{producto.nombre}</Heading>
            <Text>{producto.descripcion}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${producto.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            {
            irAlCart ? <Link to='/cart'> <Button colorScheme="green">Terminar Compra</Button></Link> : <ItemCount initial={1} onAdd={onAdd} />
            }
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
