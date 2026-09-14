import React, { useState } from 'react'
import './CSS/Login3.css'
import { useNavigate } from 'react-router-dom'

const Login3 = () => {



    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const correctUsername = "Shalu"
    const correctAge = "20"

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault()

        if (correctUsername === username && correctAge === age) {
            navigate('/login4')
        } else {
            alert("Invalid Username or Age")
        }
    }

    return (

        <div className="login3-page">

            <div className="outer">

                    <h2>Login 3</h2>

                    <div className="input-box">

                        <label>  User Name</label>

                        <input
                            type="text"
                            placeholder="Enter your user name"
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>

                    <div className="input-box">

                        <label> Age</label>

                        <input
                            type="text"
                            placeholder="Enter your Age"
                            onChange={(e) => setAge(e.target.value)}
                        />

                    </div>

                    <button onClick={handleLogin}>
                        Login
                    </button>


            </div>

        </div>

    )
}

export default Login3