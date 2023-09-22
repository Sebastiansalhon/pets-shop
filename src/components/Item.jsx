import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
  Center,
  CardHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {

  return (
  
    <> 
      {productos.map((p) => (
        <Center className="card">
          <Card border="solid" w="350px" margin="20px">
            <CardBody>
              <Image src={p.imagen} />
              <Stack>
                <Heading size="md" textAlign={"center"}>
                  {p.nombre}
                </Heading>
              </Stack>
              <Text></Text>
              <CardFooter justifyContent="center">
                <Link to={`/item/${p.id}`}>
                  <Button colorScheme="orange" color='black'>Detalle
                  </Button>
                </Link>
              </CardFooter>
            </CardBody>
          </Card>
        </Center>
      ))}
    </>
  );
};

export default Item;
