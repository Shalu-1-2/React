import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Dashboard1 from './Pages/Dashboard1'
import Login1 from './Pages/Login1'
import Login2 from './Pages/Login2'
import Dashboard2 from './Pages/Dashboard2'
import Dashboard3 from './Pages/Dashboard3'
import Login3 from './Pages/Login3'
import Login4 from './Pages/Login4'
import Login5 from './Pages/Login5'
import Login6 from './Pages/Login6'
import Login7 from './Pages/Login7'
import Dashboard4 from './Pages/Dashboard4'
import Dashboard5 from './Pages/Dashboard5'
import Dashboard7 from './Pages/Dashboard7'
import Dashboard6 from './Pages/Dashboard6'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard1' element={<Dashboard1 />} />
          <Route path='/login1' element={<Login1 />} />
          <Route path='/login2' element={<Login2 />} />
          <Route path='/dashboard2' element={<Dashboard2 />} />
          <Route path='/dashboard3' element={<Dashboard3/>} />
          <Route path='/dashboard4' element={<Dashboard4/>} />
          <Route path='/dashboard5' element={<Dashboard5/>} />
          <Route path='/dashboard7' element={<Dashboard7/>} />
          <Route path='/dashboard6' element={<Dashboard6/>} />
          <Route path='/login3' element={<Login3/>} />
          <Route path='/login4' element={<Login4/>} />
          <Route path='/login5' element={<Login5/>} />
          <Route path='/login6' element={<Login6/>} />
          <Route path='/login7' element={<Login7/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App