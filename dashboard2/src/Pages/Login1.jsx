import React, { useState } from 'react'
import './CSS/Login1.css'
import { useNavigate } from 'react-router-dom'

const Login1 = () => {

    const [name, setName] = useState("")
    const [userId, setUserid] = useState("")

    const correctName = "Shalu"
    const correctUserid = "shalu@123"

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        if (correctName === name && correctUserid === userId) {
            navigate('/login2')
        }
        else {
            alert("Invalid Name or Userid")
        }
    }

    return (
        <div className="login-page">

            <div className="login-box">

                <h2>Login 2</h2>

                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>User ID</label>
                    <input
                        type="text"
                        placeholder="Enter your User Id"
                        onChange={(e) => setUserid(e.target.value)}
                    />
                </div>

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>
    )
}

export default Login1