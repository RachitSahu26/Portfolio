import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HeroSec2 from '../Components/HeroSec2'
import AllAbout from '../Components/AllAbout'

function About() {
  return (
    <div>
      <NavBar />
      <HeroSec2 Title={"About Section"} Text={"all about my self"} />
      <AllAbout />
      <Footer />
    </div>
  )
}

export default About