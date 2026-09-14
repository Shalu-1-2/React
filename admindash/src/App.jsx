import React from 'react'
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import DashboardLayout from './Components/DashboardLayout'
import Product from './Pages/Product'
import Order from './Pages/Order'
import Users from './Pages/Users'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/dashboard' element={<DashboardLayout/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App