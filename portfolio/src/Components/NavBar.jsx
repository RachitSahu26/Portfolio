import React from 'react'
import "../Components/NavbarStyle.css"
import { Link } from 'react-router-dom'
import{GiHamburgerMenu} from "react-icons/gi";
 function NavBar() {
    return (
        <div className='header'>

            <div className="left-side-nav">
                <h1><Link to="/"> PortFolio</Link></h1>
            </div>


            <div className="right-side-nav">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/projects" >Projects</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>

                </ul>
            </div>
<div className="hamburger">
<GiHamburgerMenu size={40} style={{color:"#fff"}}/>
</div>


        </div>
    )
}

export default NavBar