import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Grid, GridItem,Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({producto}) => {

  return (
    <>
    <Center>
    <Card maxW='sm'>
  <CardBody>
    <Image
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.nombre}</Heading>
      <Text>
        {producto.descripcion}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
    <Center>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={'/category/id:'}>
      <Button variant='solid' colorScheme='blue'>
        Detalle
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
      </Center>
</Card>
    </Center>
    </>

  )
}

export default Item