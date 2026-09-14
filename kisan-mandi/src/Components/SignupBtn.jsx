import React from 'react'
import './CSS/SignupBtn.css'
const SignupBtn = () => {
  const handleSignup = () => {
    alert("Sign Up successful !")
  }
  return (
    <>
      <button className="signout-btn"  onClick={handleSignup}>
        Sign Out
      </button>
    </>
  )
}

export default SignupBtn