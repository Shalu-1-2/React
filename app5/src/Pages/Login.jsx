import React from 'react'
import './css/Login.css'
import Header from '../Components/Header'
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <>
        <Header/>
            <div className="login-container">
                <div className="login-left"></div>
                <div className="login-right">

                    <div className="login-form">

                        <h1>Login</h1>

                        <p>Enter your credentials to access your account</p>

                        <form>

                            <label>Email Address</label>

                            <div className="input-box">
                                <span>✉</span>
                                <input type="email" placeholder="Enter your email" />
                            </div>

                            <label>Password</label>

                            <div className="input-box">
                                <span><FaLock /></span>
                                <input type="password" placeholder="Enter your password" />
                                <span><FaEye /></span>
                            </div>

                            <div className="forgot">
                                Forgot Password?
                            </div>

                            <button type="submit">Login</button>
                            <center>                            <span className='line'></span>Or continue with<span className='line'></span>
                            </center>
                            <div className="google"><FaGoogle className='google' />Continue with Google</div>
                            <div className="Facebook"><FaFacebook className='Facebook' />Continue with Facebook
                            </div>
                            <div className="form-text">
                                <p>Don't have an account?  <a href="#">Register</a></p>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login