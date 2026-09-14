import React from 'react'
import './CSS/Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    My Website
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to='/about' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>About</NavLink>
                        </li>

                        <li>
                            <NavLink to='/contact' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to='/service' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Service</NavLink>
                        </li>

                        <li>
                            <NavLink to='/gallery' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Gallery</NavLink>
                        </li>
                    </ul>
                   
                </nav>
                 <div className="icons">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-user"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
            </header>
        </>
    )
}

export default Header