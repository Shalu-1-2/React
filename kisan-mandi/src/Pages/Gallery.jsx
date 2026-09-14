import React from 'react'
import './CSS/Gallery.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Gallery = () => {
  return (
    <>
      <Header />
      <section className="gallery-section">

        <div className="gallery-container">

          <div className="gallery-heading">
            <p>OUR GALLERY</p>

            <h2>Life Around KisanMandi</h2>

            <span>
              Explore the farmers, farms and fresh products
              that make KisanMandi special.
            </span>
          </div>

          <div className="gallery-grid">

            <div className="gallery-item gallery-large">
              <img
                src="/images/img_sq_1.jpg"
                alt="Farmer working in field"
              />
              <div className="gallery-overlay">
                <h3>Farm Life</h3>
                <p>Where fresh products begin</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="/images/img_sq_8.jpg"
                alt="Fresh vegetables"
              />
              <div className="gallery-overlay">
                <h3>Fresh Vegetables</h3>
                <p>Fresh from the farm</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="/images/img_sq_8.jpg"
                alt="Farmer harvesting"
              />
              <div className="gallery-overlay">
                <h3>Harvesting</h3>
                <p>Hard work behind every harvest</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="/images/img_sq_4.jpg"
                alt="Agricultural field"
              />
              <div className="gallery-overlay">
                <h3>Green Fields</h3>
                <p>Nature and agriculture together</p>
              </div>
            </div>

            <div className="gallery-item gallery-tall">
              <img
                src="/images/img_long_5.jpg"
                alt="Fresh farm produce"
              />
              <div className="gallery-overlay">
                <h3>Farm Produce</h3>
                <p>Quality you can trust</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="/images/img_sq_6.jpg"
                alt="Indian farmer"
              />
              <div className="gallery-overlay">
                <h3>Our Farmers</h3>
                <p>The heart of KisanMandi</p>
              </div>
            </div>

          </div>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default Gallery