import React, { useState } from 'react'
import "../Components/NavbarStyle.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='header'>
            {/* ..............left nav .................... */}
            <div className="left-side-nav">
                <h1><Link to="/"> PortFolio</Link></h1>
            </div>

            {/* .................right nav............... */}
            <div className={ click  ? "ur-div":"ur-div-active"}>
 
                <ul className={click ? "right-side-nav":"right-side-nav-active"}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/projects" >Projects</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>

                </ul>
            </div>







            {/* .................hamburger icon................. */}
            <div className="hamburger" onClick={handleClick}>
                {
                    click ? (
                        <FaTimes size={40} style={{ color: "#fff" }} />

                    ) : (
                        <GiHamburgerMenu size={40} style={{ color: "#a1eb40" }} />

                    )
                }


            </div>


        </div>
    )
}

export default NavBar