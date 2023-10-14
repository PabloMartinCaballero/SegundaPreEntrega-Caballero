import * as React from 'react';
import ShopButton from "../CartWidget/CartWidget"
import "./Buttons.css"

//Componente para hacer los botones linkeables
import {Link as L} from "react-router-dom"
 
//Puedo utilizar las rutas ya definidas con Router, para hacerlas linkeables

const NavbarButtons = () => {
  return (
    <div className='buttonContainer'>
      <ul className='buttonGroup'>
        <L to="/" >Home</L>
        <L to="/Products">Products</L>
        <L><ShopButton/>0</L>
      </ul>
    </div>
  );
}

export default NavbarButtons