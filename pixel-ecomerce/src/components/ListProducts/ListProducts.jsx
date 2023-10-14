import React from 'react'
import "./ListProducts.css"
import CardProducts from "../CardProducts/CardProducts"

//Llamada a los hocks
import {useState , useEffect} from "react"
import axios from "axios"
import {Link as L} from "react-router-dom"

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
      {/* Mapeo products, que es la variable donde voy a tener el Array de Objetos de la API y donde le voy a pasar cada Objeto a las tarjetas*/}
        {products.map((product)=>{
          return (
            <div key = {product.id}>
              <L to = {`/ItemDetailContainer/${product.id}`}>
                <CardProducts  product={product}/>
              </L>  
            </div>
          )
        })}
    </div>
  )
}

export default ListProducts