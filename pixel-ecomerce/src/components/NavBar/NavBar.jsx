import "./NavBar.css"
import img from "./logo.jpeg"
import React from 'react'
import NavbarButtons from "../Buttons/Buttons"

const NavBar = () => {
  return (
    <div>
        <img src={img} alt="logo" className="brandingImage"/>
            <div className="navButtons">
                <NavbarButtons />
            </div>
    </div>
  )
}

export default NavBar