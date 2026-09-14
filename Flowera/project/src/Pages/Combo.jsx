import React from 'react'
import './Css/Combo.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const Combo = ({ key, title, images, price, originalPrice, delivery, rating, reviews, discount }) => {
    return (
        <>
            <div className="combo">



                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src={images} alt="Birthday Flowers And Cake" />
                            <span className="combo-badge">{discount}%</span>
                        </div>

                        <div className="combo-info">
                            <p>{title}</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹{price}</span>
                                <span className="combo-old-price">₹{originalPrice}</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>{delivery}</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">{rating}
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />


                            </span>
                            <span className="combo-reviews">{reviews}Reviews</span>
                        </div>
                    </div>


                    {/* <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb2.webp" alt="For The Soul" />
                        </div>

                        <div className="combo-info">
                            <p>For The Soul</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1599</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.6

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </span>
                            <span className="combo-reviews">7488 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb3.webp" alt="Black Forest Cake With Pink Roses" />
                            <span className="combo-badge">26%</span>
                        </div>

                        <div className="combo-info">
                            <p>Black Forest Cake With Pink Roses</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1999</span>
                                <span className="combo-old-price">₹2589</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.4
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </span>
                            <span className="combo-reviews">8010 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb4.webp" alt="Treasure Of Heart" />
                            <span className="combo-badge">29%</span>
                        </div>

                        <div className="combo-info">
                            <p>Treasure Of Heart</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1499</span>
                                <span className="combo-old-price">₹1999</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.3
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </span>
                            <span className="combo-reviews">5030 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb5.webp" alt="Plants With Chocolates" />
                        </div>

                        <div className="combo-info">
                            <p>Plants With Chocolates</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1199</span>
                            </div>

                            <button className="combo-cart-btn">

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.6
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke /></span>
                            <span className="combo-reviews">5368 Reviews</span>
                        </div>
                    </div> */}


            </div>

           
        </>
    )
}

export default Combo