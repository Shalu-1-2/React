import React from 'react'
import './CSS/Contact.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'

const Contact = () => {
    return (
        <>
            <Header />
            <section className="contact-banner">
                <div className="contact-banner-content">
                    <div className="breadcrumb">
                        <span>Home</span>
                        <span>/</span>
                        <span>Contact</span>
                    </div>

                    <h1>KisanMandi</h1>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-container">

                    <div className="contact-info">
                        <h5>Contact Now</h5>
                        <h2>GET IN TOUCH NOW</h2>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>

                            <div>
                                <span>Have questions?</span>
                                <h4>+91 9876543210</h4>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>

                            <div>
                                <span>Write Email</span>
                                <h4>info@kisanmandi.com</h4>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaLocationDot />
                            </div>

                            <div>
                                <span>Visit Now</span>
                                <h4>
                                    Jankipuram, Lucknow<br />
                                    Uttar Pradesh, 226021
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <form>

                            <div className="form-row">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="form-row">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>

                            <textarea
                                placeholder="Comments"
                            ></textarea>

                            <button type="submit">
                                Send a message
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            <section className="contact-map">
                <iframe
                    src="https://www.google.com/maps?q=Jankipuram,Lucknow,Uttar%20Pradesh&output=embed"
                    loading="lazy"
                    title="KisanMandi Location"
                ></iframe>
            </section>
            <Footer />

        </>
    )
}

export default Contact