import {useState} from "react";
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

const ItemDetail = ({ producto }) => {

// const [cantidadAgregada, setCantidadAgregada] = useState(0)
// const {addItem} = useContext(CartContext)
// const handleOnAdd = (quantity) => {
//   setCantidadAgregada(quantity)
//     const item = {
//       id, nombre, precio
//     }

//     addItem(item, quantity)
// }

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
            <ItemCount />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
