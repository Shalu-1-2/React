import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import About from './Pages/About'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import MyButton from './Components/MyButton'
import MyCard from './Components/MyCard'
const App = () => {
  let name ="shalu"
  let age =22
  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Routers>

      <MyButton data ={name}/> <br /><br />
      <MyCard  age={age} info={name} />
    </>
  )
}

export default App