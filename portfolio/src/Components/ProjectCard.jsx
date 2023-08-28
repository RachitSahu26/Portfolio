import React from 'react'
// import pro1 from "../assets/Project_1.png";
import "../Components/ProjectCardStyles.css";
import "../Components/ProjectData";
import "../Components/CardData";

function ProjectCard(props) {
  return (
    <>
 <div className="card">
        {/* .............project img............ */}
        <div className="pro-img">
          <img src={props.imsrc} alt='pro-img' />
        </div>


        {/* ..................project detail........... */}

        <div className='project-about'>
          <h1>{props.title}</h1>
          <p></p>

          <div className="btn-box">
            <button className='btn'> {props.view}</button>
            <button className='btn-light btn'> {props.source}</button>

          </div>


        </div>




      </div>
    </>
  )
}

export default ProjectCard