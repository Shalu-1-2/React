import React from 'react'
import './CSS/Header.css'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="header-top-outer">
        <span>Support</span>
        <span>Offers</span>
        <span>Become a Vendor</span>
        <span>Corporate Tie-up</span>
        <span>+91 6387939340</span>

      </div>
      <div className="header-main-outer">
        <div className="logo">
          <img src="./public/webImg_05_663c9e3000b4f-350X118 (1).webp" alt="" />
        </div>
        <div className="search-outer">
            <input type="text" placeholder='Search Flower, Cake ,Gift etc' />

          <div className="search-icon">
            <IoSearch />
          </div>
        </div>
        <div className="header-btns"></div>

      </div>
    </>
  )
}

export default Header