import React from 'react'
import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ItemCount = () => {

const [contador, setContador] = useState (0)

return (
<>
    <div className = 'contador'>
    <Button colorScheme='blue'onClick={() => setContador (contador + 1)}>+</Button>
    <h4 className='numeroContador' >{contador}</h4> 
    <Button colorScheme='red' onClick={() => setContador (contador - 1)}>-</Button>
    </div>
</>
)
}

export default ItemCount