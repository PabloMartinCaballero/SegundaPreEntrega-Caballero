import * as React from 'react';
import ShopButton from "../CartWidget/CartWidget"
import "./Buttons.css"


const NavbarButtons = () => {
  return (
    <div className='buttonContainer'>
      <ul className='buttonGroup'>
        <li>Home</li>
        <li>Products</li>
        <li><ShopButton/> 0</li>
      </ul>
    </div>
  );
}

export default NavbarButtons