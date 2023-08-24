import React from 'react'



import { Routes,Route } from 'react-router-dom'


// all access  folder for routing
import About from './Routes/About';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
import Home from './Routes/Home';

function App() {
  return (
<>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/Projects' element={<Projects/>}/>



</Routes>


</>
  )
}

export default App