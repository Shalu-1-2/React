import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Header from './Components/Header'

const App = () => {

  return (
  <>

    <Router>

    
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </Router>
  </>
  )
}

export default App