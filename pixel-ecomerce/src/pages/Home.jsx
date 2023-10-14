import React from 'react'

//Importo ListProducts, componente que contiene la llamada a la API
import ListProducts from '../components/ListProducts/ListProducts'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ListProducts/>
    </div>
  )
}

export default Home

