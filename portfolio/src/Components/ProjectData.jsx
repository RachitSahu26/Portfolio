import React from 'react'
import "./ProjectDataStyle.css"
import CardData from "./CardData";
import ProjectCard from './ProjectCard';
function ProjectData() {
  return (
    <div className='Project-card-area'>
      <h1 className='projects'> Projects</h1>
     {
     CardData.map((val,ind)=>{
      return(

        <ProjectCard 
        key={ind} 
        imgsrc={val.imgsrc}
        text={val. text}
        title={val.title}
        view={val.view}
        />
      )
     })
     }


    </div >
  )
}

export default ProjectData