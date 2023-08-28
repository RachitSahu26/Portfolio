import React from 'react'
import "../Components/ProjectCardStyles.css";
import pro1 from "../assets/Project_1.png";
function ProjectCard() {
  return (
    <div className='Project-card-area'>
      <div className="card">
        {/* .............project img............ */}
        <div className="pro-img">
          <img src={pro1} alt='pro-img' />
        </div>


        {/* ..................project detail........... */}

        <div className='project-about'>
          <h1>Responsive Travel Website</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate quibusdam soluta unde, nesciunt ipsum aliquid amet harum exercitationem porro.</p>

          <div className="btn-box">
            <button className='btn'> VIEW</button>
            <button className='btn-light btn'> SOURCE</button>

          </div>


        </div>




      </div>



    </div >
  )
}

export default ProjectCard