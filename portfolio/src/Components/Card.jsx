import React from 'react'

import "../Components/CardStyles.css";
import "../Components/CardData";
import {NavLink} from "react-router-dom";
function ProjectCard({imgsrc, text,title, view,source_url}) {
  return (
    <>
 <div className="card">
        {/* .............project img............ */}
        <div className="pro-img">
          <img src={imgsrc} alt='pro-img' />
        </div>


        {/* ..................project detail........... */}

        <div className='project-about'>

          <div className="deta-pr-head-para">
          <h1 className='head'>{title}</h1>
          <p className='para'>{text}</p>
          </div>

          <div className="btn-box2">
            <NavLink to={view} className='btn-view'>VIEW </NavLink>
            <NavLink to={source_url} className='btn-source btn-view'>SOURCE </NavLink>

          </div>


        </div>




      </div>
    </>
  )
}

export default ProjectCard

