import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  const greeting = "Bienvenidos a mi tienda"

  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={greeting}
      />
    </>
  )
}

export default App
