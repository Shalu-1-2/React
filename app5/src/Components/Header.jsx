import React from 'react'
import './CSS/Header.css'
import { Link, NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";



const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="header-outer">
                    <div className="header-logo">
                        <b>Shop <span className='shopmate'>Mate</span></b>

                    </div>
                    <div className="navlinks">

                        <ul>
                            <li><NavLink to='/' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Home</NavLink></li>
                            <li><NavLink to='/login' className={({ isActive }) => `item ${isActive ? "active" : ""}`} >Login</NavLink></li>
                            <li><NavLink to='/acount' className={({ isActive }) => `item ${isActive ? "active" : ""}`} >Account</NavLink></li>
                            <li><NavLink to='/cotegories' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Cotegories</NavLink></li>
                            <li><NavLink to='/newarrivals' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>New Arrrival</NavLink></li>
                            <li><NavLink to='/product' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Product</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) => `item ${isActive ? "active" : ""}`}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder='Search products..' />
                        <div className="search-icon">
                            <CiSearch />
                        </div>
                    </div>
                    <div className="icons">
                        <FaRegUser />
                        <FaRegHeart />
                        <FiShoppingCart />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header