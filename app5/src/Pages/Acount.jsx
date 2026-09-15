import React from 'react'
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import './css/Acount.css'
import Header from '../Components/Header';
const Acount = () => {
    return (
        <>
        <Header/>
            <div className="login">
                <div className="account-page">
                    <div className="left-image"></div>
                    <div className="login-right">

                        <div className="login-form">

                            <h1>Create Account</h1>

                            <p>Fill in the details to create your account</p>

                            <form>

                                <div className="row1">
                                    <div className="box1">
                                        <label>Full Name</label>

                                        <div className="input-box">
                                            <span></span>
                                            <input type="text" placeholder="Enter your full name" />
                                        </div>
                                    </div>

                                    <div className="box2">
                                        <label>Email</label>

                                        <div className="input-box">
                                            <span></span>
                                            <input type="emai" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row2">
                                    <div className="box3">
                                        <label>Phone Number</label>

                                        <div className="input-box">
                                            <span><FaLock /></span>
                                            <input type="number" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    <div className="box4">
                                        <label>Password</label>

                                        <div className="input-box">
                                            <span><FaLock /></span>
                                            <input type="password" placeholder="Enter your password" />
                                            <span><FaEye /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row3">
                                    <div className="box5"><label>Confirm Password</label>

                                        <div className="input-box">
                                            <span><FaLock /></span>
                                            <input type="password" placeholder="Enter your password" className='password' />
                                        </div></div>
                                </div>
                                <div className="row4">
                                    <div className="box6">
                                        <label>Gender</label>

                                        <div className="input-box-gender">
                                            <select name="" id="">
                                                <option value="male">Male</option>
                                                <option value="male">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="box7">
                                        <label>Date of Birth</label>

                                        <div className="input-box">
                                            <span><FaLock /></span>
                                            <input type="date" />
                                            <span><FaEye /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row5">
                                    <div className="privacy">
                                        <input type="checkbox" />I agree to the <span className='span-text'>Term & Condition</span> and <span className='span-text'> Privacy Policy</span>
                                    </div>
                                </div>


                                <div className="row6">
                                    <button type="submit">Create Account</button>
                                    <center>
                                        <span className='line'></span>Or sign up with<span className='line'></span>
                                    </center>
                                    <div className="google"><FaGoogle />Continue with Google</div>
                                    <div className="Facebook"><FaFacebook />Continue with Facebook
                                    </div>
                                    <div className="form-text">
                                        <p>Don't have an account?  <a href="#">Register</a></p>

                                    </div>
                                </div>


                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Acount