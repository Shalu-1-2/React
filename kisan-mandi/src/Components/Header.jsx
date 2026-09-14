import React from 'react'
import './CSS/Header.css'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import LoginBtn from './LoginBtn';
import SignupBtn from './SignupBtn';
import { NavLink } from "react-router-dom"


const Header = () => {

  return (
    <header>
      <div className="top-section"></div>

      <div className="navbar">

        <div className="logo">
          <img src="./images/logo.png" alt="KisanMandi Logo" />

          <div className="logo-text">
            <h2>KisanMandi</h2>
            <p>Kisan ki fasal, sahi daam par</p>
          </div>
        </div>


        <nav className="navlist">
          <ul>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Contact
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Contact
              </NavLink>
            </li> */}

          </ul>
        </nav>


        <div className="searchbar">

          <span><FaSearch /></span>

          <input
            type="text"
            placeholder="Search for crops..."
          />

        </div>


      <div className="nav-button">

    <div className="cart">
        <FaCartShopping />
        <span>0</span>
    </div>

    <LoginBtn />
    <SignupBtn />

</div>

      </div>

    </header>
  )
}

export default Header