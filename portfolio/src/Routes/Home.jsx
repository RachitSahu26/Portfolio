import React from 'react'
import "./HomeStyle.css";

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
// import HomeSec from '../Components/HomeSec'
import AllAbout from '../Components/AllAbout'
import CardArea from '../Components/CardArea'
import Form from '../Components/Form'
import MyName from '../Components/MyName';
import Technology from '../Components/Technology';


function Home() {
  return (
    <div className='Home'>

<NavBar/>
{/* <HomeSec/> */}
<MyName/>
<AllAbout/>
<Technology/>
<CardArea/>
<Form/>

<Footer/>

    </div>
  )
}

export default Home