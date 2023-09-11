import React from 'react';
import "./FooterStyles.css";

import { HiOutlineHome } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";

function Footer() {
    return (
        <div className="footer">
            {/* ..................left footer part................... */}
            <div className="left-footer">
                <div className="location">
                    <HiOutlineHome className='Home-icon' size={40} style={{ color: "#fff" }} />
                    <div className="home-detail">
                        <span>Uttar Pradesh</span>
                        <span> Karwi Chitrakoot</span>
                        <span> Purani Bazar</span>
                    </div>
                </div>

                <div className="call-detail">
                    <a href="tel:9473565817">

                        <FiPhoneCall className='Phone-icon' size={40} style={{ color: "#fff" }} />
                    </a>

                    <div className="phone-no">
                        {/* Add a tel: link for the phone number */}
                        <a href="tel:9473565817">
                            <p>94-73-56-58-17</p>
                        </a>
                    </div>
                </div>

                <div className="mail-info">
                <a href="mailto:curiousrachit.26@gmail.com">
                   
                    <GrMail className='Gmail-icon' size={40} style={{ color: "#fff" }} />
                    </a>
                   
                    <div className="mail-name">
                        {/* Add a mailto: link for the email address */}
                        <a href="mailto:curiousrachit.26@gmail.com">
                            <p>curiousrachit.26@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* ..................right footer part................... */}
            <div className="right-footer">
                <h1>About the Company</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt!</p>
                <div className="social-icons">
                    {/* GitHub Link */}
                    <a href="https://github.com/RachitSahu26" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='github' size={50} style={{ color: "#fff" }} />
                    </a>

                    {/* LinkedIn Link */}
                    <a href="https://www.linkedin.com/in/rachit-sahu-004ba2255/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className='linkdin' size={50} style={{ color: "#fff" }} />
                    </a>

                    {/* Instagram Link */}
                    <a href="https://www.instagram.com/curious.rachit/" target="_blank" rel="noopener noreferrer">
                        <PiInstagramLogoBold className='insta' size={50} style={{ color: "#fff" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
