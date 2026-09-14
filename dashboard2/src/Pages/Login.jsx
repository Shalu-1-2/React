import React, { useState } from 'react'
import './CSS/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const correctEmail = "yash@gmail.com"
    const correctPassword = "4422"

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        if (correctEmail === email && correctPassword === password) {
            navigate('/login1')
        } else {
            alert("Invalid Email or Password")
        }
    }

    return (
        <div className="login-outer">

            <form onSubmit={handleLogin}>


                <h1>Login 1</h1>
                <div className="input-box">
                    <label htmlFor="email">
                        Email address
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login