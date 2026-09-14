import React, { useState } from 'react'
import './CSS/Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const correctEmail = "shalu@gmail.com"
    const correctPassword = "1234"

    const navigate = useNavigate()


    function handleLogin() {
        if (correctEmail == email && correctPassword == password)
            navigate('/dashboard')
    }
    return (
        <>
            <div className='login-outer'>
                <div className="login-card">
                    <h1>Login Here</h1>
                    <p>Get Access your Account</p>
                    <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    <p className='forget'><a href=""> Reset password</a></p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login

