import React from 'react'
import './CSS/Footer.css'
import { FaLocationDot } from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {

  return (

    <>
      <div className="footer-section">
        <footer className="footer">

          <div className="footer-container">

            <div className="footer-about">

              <div className="footer-logo">
                <img src="./images/logo.png" alt="KisanMandi Logo" />

                <div>
                  <h2>KisanMandi</h2>
                  <p>Kisan ki fasal, sahi daam par</p>
                </div>
              </div>

              <p className="footer-description">
                KisanMandi is a platform that connects farmers
                directly with buyers and helps them get the right
                value for their crops.
              </p>

              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaYoutube /></a>
              </div>

            </div>


            <div className="footer-links">

              <h3>Quick Links</h3>

              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>

            </div>


            <div className="footer-links">

              <h3>For Farmers</h3>

              <ul>
                <li><a href="#">Sell Your Crops</a></li>
                <li><a href="#">Farmer Dashboard</a></li>
                <li><a href="#">Crop Listings</a></li>
                <li><a href="#">How It Works</a></li>
              </ul>

            </div>


            <div className="footer-contact">

              <h3>Contact Us</h3>

              <p><FaLocationDot />
                Lucknow, Uttar Pradesh</p>
              <p>  <FaPhoneAlt />
                +91 98765 43210</p>
              <p><MdOutlineMail />
                support@kisanmandi.com</p>

            </div>

          </div>


          <div className="footer-bottom">

            <p>
              2026 KisanMandi.
            </p>

            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>

          </div>

        </footer>
      </div>
    </>
  )
}

export default Footer