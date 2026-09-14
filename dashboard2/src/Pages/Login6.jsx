import React, { useState } from 'react'
import './CSS/Login6.css'
import { useNavigate } from 'react-router-dom'

const Login6 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const correctName = "Shalu"
    const correctEmail = "shalu@gmail.com"
    const correctPassword = "1234"

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault()

        if ( correctName === name && correctEmail === email && correctPassword === password
        ) 
        {
            navigate('/login7')
        }
        else {
            alert("Invalid Name, Email or Password")
        }
    }

    return (
        <div className="login6-page">

            <div className="outer">

                <form onSubmit={handleLogin}>

                    <h2>Login 6</h2>

                    <div className="input-box">

                        <label>Name</label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className="input-box">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="input-box">

                        <label>Password</label>

                        <input
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

        </div>
    )
}

export default Login6