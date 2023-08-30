import React from 'react'

import Card from '../Components/Card'
import CardData from "../Components/CardData";

import "../Components/CardAreaStyle.css";
function ProjectData() {
  return (
    <div className='Project-card-area'>
      {/* <h1 className='projects'> Projects</h1> */}


      {
    CardData.map((val,ind)=>{
     return(
      <>

       <Card 
       key={ind} 
       imgsrc={val.imgsrc}
       text={val. text}
       title={val.title}
       view={val.view}
       />



    </>
     )
    })}

    </div >
  );
}

export default ProjectData