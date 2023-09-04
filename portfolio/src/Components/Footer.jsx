import React from 'react'
import "./FooterStyles.css";

import { HiOutlineHome } from "react-icons/hi";

import { FaGithub } from "react-icons/fa";

import { AiFillLinkedin } from "react-icons/ai";

import { PiInstagramLogoBold } from "react-icons/pi";

import { FiPhoneCall } from "react-icons/fi";

import { GrMail } from "react-icons/gr";

// import {BsTelephonePlus} from  "react-icons/bs";

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
                    <FiPhoneCall className='Phone-icon' size={40} style={{ color: "#fff" }} />
                    <div className="phone-no">
                        <p>94-73-56-58-17</p>
                    </div>
                </div>



                <div className="mail-info">
                    <GrMail className='Gmail-icon' size={40} style={{ color: "#fff" }} />

                    <div className="mail-name">
                        <p>curiousrachit.26@gamil.com</p>
                    </div>

                </div>
            </div>

            {/* ..................right footer part................... */}
            <div className="right-footer">
                <h1>About the Company</h1>
                <p>Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti, sunt!</p>
                <div className="social-icons">
                    <FaGithub className='github' size={50} style={{ color: "#fff" }} />
                    <AiFillLinkedin  className='linkdin'size={50} style={{ color: "#fff" }} />
                    <PiInstagramLogoBold className='insta' size={50} style={{ color: "#fff" }} />
                </div>
            </div>

        </div>
    )
}

export default Footer