import React from 'react'
import './CSS/Hero.css'

const Hero = () => {
    return (
        <>
            <section className="hero">

                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="./images/1.mp4" type="video/mp4" />
                </video>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <p className="hero-small-text">WELCOME TO KISANMANDI</p>

                    <h1>
                        Fresh From <span>Farm</span><br />
                        Directly To You
                    </h1>

                    <p className="hero-description">
                        Buy fresh agricultural products directly from
                        trusted farmers at the best prices.
                    </p>

                    <div className="hero-buttons">
                        <button className="shop-btn">Shop Now</button>
                        <button className="learn-btn">Learn More</button>
                    </div>
                </div>

            </section>



            <section className="category-section">

                <div className="category-container">

                    <div className="category-heading">
                        <p>EXPLORE OUR CATEGORIES</p>

                        <h2>Shop Fresh From The Farm</h2>

                        <span>
                            Discover fresh and quality agricultural products
                            from trusted farmers.
                        </span>
                    </div>

                    <div className="category-cards">

                        <div className="category-card">
                            <img
                                src="/images/card1.jpg"
                                alt="Vegetables"
                            />

                            <div className="category-card-content">
                                <h3>Vegetables</h3>
                                <p>Fresh & Healthy</p>
                                <button>Explore</button>
                            </div>
                        </div>

                        <div className="category-card">
                            <img
                                src="/images/card2.jpeg"
                                alt="Fruits"
                            />

                            <div className="category-card-content">
                                <h3>Fruits</h3>
                                <p>Fresh & Natural</p>
                                <button>Explore</button>
                            </div>
                        </div>

                        <div className="category-card">
                            <img
                                src="/images/card3.jpg"
                                alt="Grains"
                            />

                            <div className="category-card-content">
                                <h3>Grains</h3>
                                <p>Pure & Quality</p>
                                <button>Explore</button>
                            </div>
                        </div>

                        <div className="category-card">
                            <img
                                src="/images/card4.jpg"
                                alt="Pulses"
                            />

                            <div className="category-card-content">
                                <h3>Pulses</h3>
                                <p>Healthy & Nutritious</p>
                                <button>Explore</button>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Hero