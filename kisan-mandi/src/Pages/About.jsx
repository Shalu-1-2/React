import React, { useState } from 'react'

import './CSS/About.css'

import Header from '../Components/Header'

import Footer from '../Components/Footer'

import { FaUserTie, FaLeaf, FaLocationDot, FaStar } from 'react-icons/fa6'

import { FaArrowRight } from 'react-icons/fa'

const About = () => {

    const [farmers, setFarmers] = useState(10)

    const [products, setProducts] = useState(500)

    const [locations, setLocations] = useState(50)

    const [rating, setRating] = useState(4.8)

    return (
        <>
            <Header />

            <section className="about-section">

                <div className="about-content">

                    <div className="about-text">

                        <p className="about-small-title">
                            ABOUT KISANMANDI
                        </p>

                        <h2>
                            Empowering Farmers
                            <br />
                            For A Better Future
                        </h2>

                        <p className="about-description">
                            KisanMandi connects farmers and buyers through
                            a simple digital marketplace. Discover fresh
                            agricultural products while supporting the
                            farmers who grow them.
                        </p>

                        <div className="about-points">
                            <p>✓ Fresh From Farms</p>
                            <p>✓ Direct Farmer Connection</p>
                            <p>✓ Fair & Transparent Prices</p>
                        </div>

                        <button className="about-btn">
                            Explore KisanMandi
                        </button>

                    </div>

                </div>

                <div className="services-section">

                    <div className="services-container">

                        <div className="services-image">
                            <img
                                src="/images/c1.jpeg"
                                alt="KisanMandi Services"
                            />
                        </div>

                        <div className="services-content">

                            <div className="services-intro">

                                <p className="services-small-title">
                                    OUR SERVICES
                                </p>

                                <h2>
                                    Simple Solutions<br />
                                    For Farmers & Buyers
                                </h2>

                                <p>
                                    KisanMandi provides simple and reliable
                                    solutions to help farmers sell their products
                                    and buyers discover fresh agricultural goods.
                                </p>

                            </div>

                            <div className="service-cards">

                                <div className="service-card">

                                    <img
                                        src="/images/c2.jpeg"
                                        alt="Fresh Products"
                                    />

                                    <h3>Fresh Products</h3>

                                    <p>
                                        Discover fresh and quality products
                                        directly from farms.
                                    </p>

                                    <a href="#">
                                        Explore <FaArrowRight />
                                    </a>

                                </div>

                                <div className="service-card">

                                    <img
                                        src="/images/c3.jpeg"
                                        alt="Farmer Marketplace"
                                    />

                                    <h3>Farmer Marketplace</h3>

                                    <p>
                                        Connect farmers with buyers through
                                        our digital marketplace.
                                    </p>

                                    <a href="#">
                                        Explore <FaArrowRight />
                                    </a>

                                </div>

                                <div className="service-card">

                                    <img
                                        src="/images/c4.jpeg"
                                        alt="Easy Delivery"
                                    />

                                    <h3>Easy Delivery</h3>

                                    <p>
                                        Get agricultural products delivered
                                        conveniently to your doorstep.
                                    </p>

                                    <a href="#">
                                        Explore <FaArrowRight />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="stats-section">

                    <div className="stats-container">

                        <div className="stat-box">

                            <div className="stat-icon">
                                <FaUserTie />
                            </div>

                            <div className="stat-content">

                                <h3>{farmers}K+</h3>

                                <p>Trusted Farmers</p>

                                <button onClick={() => setFarmers(farmers + 1)}>
                                    +
                                </button>

                                <button onClick={() => setFarmers(farmers - 1)}>
                                    -
                                </button>

                            </div>

                        </div>

                        <div className="stat-box">

                            <div className="stat-icon">
                                <FaLeaf />
                            </div>

                            <div className="stat-content">

                                <h3>{products}+</h3>

                                <p>Fresh Products</p>

                                <button onClick={() => setProducts(products + 1)}>
                                    +
                                </button>

                                <button onClick={() => setProducts(products - 1)}>
                                    -
                                </button>

                            </div>

                        </div>

                        <div className="stat-box">

                            <div className="stat-icon">
                                <FaLocationDot />
                            </div>

                            <div className="stat-content">

                                <h3>{locations}+</h3>

                                <p>Locations</p>

                                <button onClick={() => setLocations(locations + 1)}>
                                    +
                                </button>

                                <button onClick={() => setLocations(locations - 1)}>
                                    -
                                </button>

                            </div>

                        </div>

                        <div className="stat-box">

                            <div className="stat-icon">
                                <FaStar />
                            </div>

                            <div className="stat-content">

                                <h3>{rating.toFixed(1)}/5</h3>

                                <p>Customer Rating</p>

                                <button onClick={() => setRating(rating + 0.1)}>
                                    +
                                </button>

                                <button onClick={() => setRating(rating - 0.1)}>
                                    -
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    )
}

export default About