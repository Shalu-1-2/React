import React, { useState } from 'react'
import './CSS/Login2.css'
import { useNavigate } from 'react-router-dom'

const Login2 = () => {

    const [name, setName] = useState("")
    const [fname, setFname] = useState("")

    const correctName = "Shalu"
    const correctfname = "shailendra"

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault()

        if (correctName === name && correctfname === fname) {
            navigate('/login3')
        }
        else {
            alert("Invalid Name or Father's Name")
        }
    }

    return (
        <div className="login2-page">

            <div className="outer">

                <h2>Student Login</h2>


                    <div className="mb-3">
                        <label className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Father Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Father Name"
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        className="btn btn-warning"
                    >
                        Login
                    </button>
            </div>

        </div>
    )
}

export default Login2