import React from 'react'
import "../Components/HeroStyle.css"
import videoSource from '../assets/snow.mp4';
function HomeSec() {
    return (


        <div className="hero">
            {/* ...................added a video whole website............ */}
            <div className="hero-video">

                <video className='snow-video' muted>
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>



            {/* ...................user detail ................. */}
            <div className="user-contnet">
                <h1> Hi, I am Rachit Sahu</h1>
                <p>React<br />Developer</p>
                <div className="btn-box">
                    <button className='btn'> Project</button>
                    <button className='btn-light btn'> Detail</button>

                </div>

            </div>











         </div>
    )
}

export default HomeSec