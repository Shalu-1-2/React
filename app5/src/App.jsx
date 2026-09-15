import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Acount from './Pages/Acount'
import Product from './Pages/Product'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/acount' element={<Acount/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </Router>
    </>
  )
}
export default App 