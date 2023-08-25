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

            <div className="left-side-nav">
                <h1><Link to="/"> PortFolio</Link></h1>
            </div>


            <div className={click ? "right-side-nav" : "right-side-nav2"}>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/projects" >Projects</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>

                </ul>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {
                    click ? (
                        <GiHamburgerMenu size={40} style={{ color: "#fff" }} />

                    ) : (
                        <FaTimes size={40} style={{ color: "#fff" }} />

                    )
                }


            </div>


        </div>
    )
}

export default NavBar