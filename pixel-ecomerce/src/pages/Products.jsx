import React from 'react'

//Hoock de Router Dom para navegar
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const navigate = useNavigate();

  return (
    <div>
        Products
        <button onClick={()=>{
          navigate ("/")
        }}>Back tho home</button>
    </div>
  )
}

export default Products

