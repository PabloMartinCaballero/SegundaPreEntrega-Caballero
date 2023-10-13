import React from 'react'
import "./ListProducts.css"

//Llamada a los hocks
import {useState , useEffect} from "react"
import axios from "axios"

//LLamada a la API de productos

const ListProducts = () => {

 { /* Creo un estado, para guardar los productos de la API*/ } 

  const [products , setProducts]  = useState([])

 {/* Llamada a la API */}
   
   useEffect(()=>{
    axios("https://fakestoreapi.com/products").then((resp) => setProducts(resp.data))
   },[]) 
    
   

  return (

    <div className='List-Products'>
        <h1>List Products</h1>
    </div>

  )
}

export default ListProducts