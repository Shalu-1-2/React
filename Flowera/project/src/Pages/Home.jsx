import React from 'react'
import './Css/Home.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Category from '../Components/Category'



import Carousel from 'react-bootstrap/Carousel';
import ProductCard from './ProductCard'
import CardFour from './CardFour'
import Combo from './Combo'
import Cake from './Cake'
import ClientReviews from './ClientReviews'
import Features from './Features'

const Home = () => {

  let category = [
    { _id: 1, text: "CAKES", imageUrl: "/images/c1.webp" },
    { _id: 2, text: "FLOWERS", imageUrl: "/images/c2.webp" },
    { _id: 3, text: "COMBOS", imageUrl: "/images/c3.webp" },
    { _id: 4, text: "PLANTS", imageUrl: "/images/c4.webp" },
    { _id: 5, text: "BIRTHDAY", imageUrl: "/images/c5.webp" },
    { _id: 6, text: "ANNIVERSARY", imageUrl: "/images/c6.webp" },
  ]

  let Product = [

    {
      _id: 1,
      title: "Roses Garbera In A Basket",
      images: "/images/p1.webp",
      discount: "10%",
      price: 999,
      originalPrice: 1099,
      delivery: "Today",
      rating: 4.9,
      reviews: 4774
    },
    {
      _id: 2,
      title: "Cornation In ",
      images: "/images/p2.webp",
      discount: "14%",
      price: 1999,
      originalPrice: 2299,
      delivery: "Today",
      rating: 4,
      reviews: 7927
    },
    {
      _id: 3,
      title: "Ravishing  Pink Roses In Vase ",
      images: "/images/p3.webp",
      discount: "6%",
      price: 4099,
      originalPrice: 5299,
      delivery: "Today",
      rating: 4.2,
      reviews: 6027
    }
    , {
      _id: 4,
      title: "70 Roses In Box ",
      images: "/images/p4.webp",
      discount: "18%",
      price: 1645,
      originalPrice: 2299,
      delivery: "Today",
      rating: 4.1,
      reviews: 8629
    },
    {
      _id: 5,
      title: "Pink Lilies Bouquet in Exotic Packing",
      images: "/images/p5.webp",
      discount: "10%",
      price: 2099,
      originalPrice: 2240,
      delivery: "Today",
      rating: 4.3,
      reviews: 6050
    },

  ]

  let ComboCard = [

    {
      _id: 1,
      title: "Birthday Flowers And Cake",
      images: "/images/comb1.webp",
      price: 1199,
      originalPrice: 1249,
      delivery: "Today",
      rating: 4.6,
      discount: 4,
      reviews: 7173
    },
    {
      _id: 2,
      title: "For The Soul",
      images: "/images/comb2.webp",
      price: 1199,
      originalPrice: 1599,
      delivery: "Today",
      rating: 4.6,
      discount: 10,
      reviews: 7488
    },
    {
      _id: 3,
      title: "Black Forest Cake With Pink Roses",
      images: "/images/comb1.webp",
      price: 1999,
      originalPrice: 2500,
      delivery: "Today",
      rating: 4.4,
      discount: 26,
      reviews: 8010
    }
    ,
    {
      _id: 4,
      title: "Treasure of Heart",
      images: "/images/comb4.webp",
      price: 1499,
      originalPrice: 1999,
      delivery: "Today",
      rating: 4.3,
      discount: 29,
      reviews: 5030
    }
    ,
    {
      _id: 5,
      title: "Plants With Chocolates",
      images: "/images/comb5.webp",
      price: 1199,
      originalPrice: 2500,
      delivery: "Today",
      rating: 4.6,
      discount: 5,
      reviews: 5368
    }
  ]


  return (
    <>

      <Header />

      {/* Slider start */}

      <div className="slider-outer">
        <Carousel fade>
          <Carousel.Item>
            <img src="/images/s1.webp" alt="slider 1" className='slider-image' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/s2.webp" alt="slider 2" className='slider-image' />

          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/s3.webp" alt="slider 3" className='slider-image' />

          </Carousel.Item>
        </Carousel>
      </div>


      {/* Slider End */}
      {/* Category card start */}
      <div className="category-card-home-outer">
        {

          category.slice(0, 6).map((item) => (
            <Category key={item._id} text={item.text} imageUrl={item.imageUrl} />
          ))
        }

      </div>


      <div className="middle-image-outer">
        <div className="first-image">
          <img src="./images/u-p-1.webp" alt="Upper-first-image" />
        </div>
        <div className="second-image">
          <img src="./images/u-p-2.webp" alt="Upper-first-image" />

        </div>
      </div>
      <div className="why-choose">
        <img src="./images/m-p-1.webp" alt="Upper-first-image" />
      </div>

      <h2 className='heading'>Best Flower Bouquet</h2>

      <div className="bouquet">

        {
          Product.slice(0, 5).map((item) => (
            <ProductCard key={item._id} title={item.title} images={item.images} discount={item.discount} price={item.price}
              originalPrice={item.originalPrice} delivery={item.delivery} rating={item.rating} reviews={item.reviews}
            />
          ))

        }

      </div>




      <CardFour />

      <h2 className='combo-heading'>Best Selling Combos</h2>

                <div className="combo-container">
        {
          ComboCard.slice(0, 5).map((item) => (
            <Combo key={item._id} title={item.title} images={item.images} discount={item.discount} price={item.price}
              originalPrice={item.originalPrice} delivery={item.delivery} rating={item.rating} reviews={item.reviews}
            />

          ))

        }

      </div>

      <Features />
      <Cake />
      <ClientReviews />
      <Footer />



    </>
  )
}

export default Home