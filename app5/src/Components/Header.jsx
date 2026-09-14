import React from 'react'
import './CSS/Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header-outer">
                <b>Shop Cart</b>
                <div className="navlinks">

                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => `item ${isActive ? "active" : ""}`} >About</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Contact</NavLink></li>
                        <li><NavLink to='/service' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Service</NavLink></li>
                    </ul>
                </div>
                <button>Login</button>
            </div>
        </>
    )
}

export default Header