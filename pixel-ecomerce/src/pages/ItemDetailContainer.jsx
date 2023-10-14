import React from 'react'

import CardProducts from '../components/CardProducts/CardProducts'

//Llamada a los hocks
import {useState , useEffect} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom';


//LLamada a la API de productos
const ItemDetailContainer = () => {
 

  let {id} = useParams()
  console.log("id", id)

 { /* Creo un estado, para guardar los productos de la API*/ } 

  const [product , setProduct]  = useState([])

 {/* Llamada a la API */}
   
 console.log(product)

   useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`).then((resp) => setProduct(resp.data))
   },[id]) 
    
  return (
    <div style = {{display : 'flex', justifyContent: 'center', margin: 20}}>
      {product.id ? <CardProducts  product={product}/> : null}
    </div>
  )
}

export default ItemDetailContainer