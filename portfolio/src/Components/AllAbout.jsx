import React from 'react'
import "../Components/AllAboutStyle.css";
import MyImg from "../assets/my_img.jpg";

function AllAbout() {
  return (
<div className="About">











    {/* left side  */}
<div className="my-img">
<img src={MyImg} alt='my image'>


    
</img>
</div>



















    {/* right side  */}
<div className="my-detail">
<h1>Who Am I ?</h1>
<p>I am fronted React Developer.<br/>I create a responsive secure<br/> Website for Clients.</p>
</div>
</div>
  )
}

export default AllAbout