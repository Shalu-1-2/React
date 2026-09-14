import React, { useState } from 'react'
import './CSS/Login5.css'
import { useNavigate } from 'react-router-dom'

const Login5 = () => {

    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")

    const correctEmail = "shalu@gmail.com"
    const correctOtp = "123456"

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault()

        if (correctEmail === email && correctOtp === otp) {

            navigate('/login6')

        } else {

            alert("Invalid Email or OTP")

        }
    }

    return (
        <div className="login5-page">

            <div className="outer">

    

                    <h2>OTP Login 5 </h2>

                    <div className="input-box">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
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

                    <button onClick={handleLogin}>
                        Login
                    </button>


            </div>

        </div>
    )
}

export default Login5