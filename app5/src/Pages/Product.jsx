import React from 'react'
import { CiHeart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import './css/Product.css'
import Header from '../Components/Header';
import { CiSearch } from "react-icons/ci";

const Product = () => {
    return (
        <>
           <Header/>
            <div className="allproduct">

                <div className="allproducts">
                    <h1>All Products</h1>
                </div>
                <div className="search-for">
                    <CiSearch />
                    <input type="text" name="" id="" />
                </div>
                <div className="sort">
                    <p>Sort</p>
                    <select>
                        <option value="1">Featured</option>
                        <option value="1">Featured</option>
                        <option value="1">Featured</option>
                    </select>
                </div>
            </div>

            <div className="product-container">
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c9.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c6.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c3.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c7.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
            </div>
            <div className="product-container">
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c4.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="./10.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c2.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="./c1.png" alt="" />
                        <span className="heart"><CiHeart />
                        </span>
                    </div>
                    <div className="product-info">
                        <h3>Elegant handbag</h3>
                        <p><MdCurrencyRupee />1,999
                        </p>
                        <button> <FiShoppingCart /> Add To car</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product