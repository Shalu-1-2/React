import React from 'react'
import './CSS/Header.css'

const Header = () => {
    return (
        <>
            <div className="header-outer">
                {/* <img src="./logo.jpeg" alt="logo" className="header-logo" /> */}
                <b>Shop Cart</b>
                <div className="navlinks">

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Gallery</a></li>
                    </ul>
                </div>
                <button>Login</button>
            </div>

        </>
    )
}

export default Header