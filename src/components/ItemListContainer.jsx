import React from 'react'
import {
  Flex,
  Box,
} from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {

// const productos = [
//       {nombre: "Producto A", descripcion: "descripcion de producto A", precio: 1000},
//       {nombre: "Producto B", descripcion: "descripcion de producto B", precio: 1500},
//       {nombre: "Producto C", descripcion: "descripcion de producto C", precio: 2000}
//     ]

  return (
    <div>
      <Flex>
        <Box p='4'><h1>{greeting}</h1>
      {/* <ItemList 
      productos={productos}
      /> */}</Box>
      </Flex>
    </div>
  )
}

export default ItemListContainer
