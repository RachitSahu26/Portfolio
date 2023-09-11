import React from 'react'
import "../Components/AllAboutStyle.css";
import MyImg from "../assets/my_img.jpg";
import { FaGithub } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";

function AllAbout() {
  return (
    <div className="About">











      {/* left side  */}
      <div className="profile-img-div">

        <img src={MyImg} alt='my image' className='pro-img' />
      </div>
























      {/* right side  */}
      <div className="my-detail">
        <h1>Who Am I ?</h1>
        <p> Hello! I'm Rachit Sahu,an Computer Science Student.I am a passionate frontend developer with a deep love for creating immersive and user-friendly web experiences. Over the years, I've honed my skills in HTML, CSS, and JavaScript, and I thrive on turning design concepts into interactive, pixel-perfect websites
        </p>

        <div className="social-icons">
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

      export default AllAbout