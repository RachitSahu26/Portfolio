import React from 'react'
import "../Components/HeroStyle.css"
function HomeSec() {
    return (
        <div className='hero-detail'>
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