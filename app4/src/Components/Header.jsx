import React from 'react'
import './CSS/Header.css'

const Header = () => {
    return (
        <>
            <div className="header-outer">
                <b>Shop Cart</b>
                <div className="navlinks">

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/service">Service</a></li>
                    </ul>
                </div>
                <button>Login</button>
            </div>
        </>
    )
}

export default Header