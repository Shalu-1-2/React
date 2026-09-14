import React from "react";
import { Link } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">

        <div className="Dashboard">
          <Link to="/">
            <i className="fa-solid fa-user-lock"></i>
            Login
          </Link>
        </div>

        <div className="text">
          Welcome <span>Admin</span>
        </div>

        <div className="avtar">
          <Link to="/user">
            <i className="fa-solid fa-user"></i>
            User
          </Link>
        </div>

      </div>


      <div className="dashboard">

        <nav>

          <h2>
            <i className="fa-solid fa-chart-bar"></i>
            Dashboard
          </h2>

          <Link to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>

          <Link to="/contact">
            <i className="fa-solid fa-phone"></i>
            Contact
          </Link>

          <Link to="/service">
            <i className="fa-solid fa-gear"></i>
            Service
          </Link>

          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i>
            About
          </Link>

          <Link to="/login">
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </Link>

        </nav>

      </div>
    </>
  );
};

export default Header;