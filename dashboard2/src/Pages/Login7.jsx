import React, { useState } from 'react'
import './CSS/Login7.css'
import { useNavigate } from 'react-router-dom'

const Login7 = () => {

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")

    const correctUsername = "shalu"
    const correctPhone = "7754958401"
    const correctOtp = "123456"

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        if (
            correctUsername === username &&
            correctPhone === phone &&
            correctOtp === otp
        ) {
            navigate('/dashboard')
        }
        else {
            alert("Invalid Username, Phone Number or OTP")
        }
    }

    return (
        <div className="login7-page">
            <div className="outer">


                    <h2>Login 7</h2>

                    <div className="input-box">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label>OTP</label>
                        <input
                            type="text"
                            placeholder="Enter your OTP"
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>

                    <button onClick={handleLogin} >Login</button>


            </div>
        </div>
    )
}

export default Login7