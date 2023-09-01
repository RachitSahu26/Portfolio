import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HeroSec2 from '../Components/HeroSec2'
import Form from '../Components/Form'


function Contact() {
  return (
    <div>
      <NavBar/>
      <HeroSec2 Title={"Contact Page"} Text={"Conact Me"} />
<Form/>
<Footer/>
    </div>
  )
}

export default Contact