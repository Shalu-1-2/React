import React from 'react'
import{BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Product from './Pages/Product'
import Users from './Pages/Users'
import Dashboard from './Pages/Dashboard'
import Order from './Pages/Order'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App