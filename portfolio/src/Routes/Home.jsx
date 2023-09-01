import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeSec from '../Components/HomeSec'
import AllAbout from '../Components/AllAbout'
import CardArea from '../Components/CardArea'
import Form from '../Components/Form'


function Home() {
  return (
    <div>

<NavBar/>
<HomeSec/>
<AllAbout/>
<CardArea/>
<Form/>

<Footer/>

    </div>
  )
}

export default Home