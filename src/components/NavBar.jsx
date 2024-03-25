import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <Flex>
        <Box p='4'>
          <h1>Tienda Prueba</h1>
        </Box>
        <Box p='4'>
          <Menu>
            <MenuButton>
              Categorías
            </MenuButton>
            <MenuList>
              <MenuItem>Categoría 1</MenuItem>
              <MenuItem>Categoría 2</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>
    </>
  )
}

export default NavBar
