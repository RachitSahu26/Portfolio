import React from 'react'
import "../Components/HeroSec 2 Style.css";
function HeroSec2(props) {
  return (
    <div className='Hero-sec2'>
      <div className="project-detail">


        <h1 className='head-line'>
      {props.Title}
        </h1>
        <p className='head-para'>  {props.Text}</p>



      </div>

    </div>
  )
}

export default HeroSec2