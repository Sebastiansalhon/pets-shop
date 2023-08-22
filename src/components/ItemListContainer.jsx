import ItemCount from "./ItemCount"
import { useState } from 'react'

const ItemListContainer = ({greeting}) => {

    

    return (
        <>
        <h1 className="greeting">{greeting}</h1>

        <ItemCount />
        </>
    )
}

export default ItemListContainer