import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <div className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;