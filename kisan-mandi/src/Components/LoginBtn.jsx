import React from 'react'
import './CSS/LoginBtn.css'

const LoginBtn = () => {

  const handleLogin = () => {
    alert("Login Successful")
  }

  return (
    <>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </>
  )
}

export default LoginBtn