import React, { useState } from 'react'
import './CSS/Login4.css'
import { useNavigate } from 'react-router-dom'

const Login4 = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const correctPassword = "1234"

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault()

        if (password === correctPassword && password === confirmPassword) {

            navigate('/login5')

        } else if (password !== confirmPassword) {

            alert("Password and Confirm Password do not match")

        } else {

            alert("Invalid Password")

        }
    }

    return (

        <div className="login4-page">

            <div className="outer">


                    <h2>Login 4</h2>

                    <div className="input-box">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    <div className="input-box">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                    </div>

                    <button onClick={handleLogin}>
                        Login
                    </button>

            

            </div>

        </div>
    )
}

export default Login4