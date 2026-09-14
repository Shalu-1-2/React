import React from 'react'
import './CSS/Dashboard.css'

const Dashboard = () => {
    return (
        <div className="container">

            <div className="top-section">
                <div className="logo">
                    <img src="../src/assets/dblogo.jpeg" alt="logo" />
                </div>

                <div className="profile">
                    <div className="profile-img">A</div>
                    <div>
                        <h4>Admin</h4>
                        <p>Administrator</p>
                    </div>
                </div>
            </div>

            <div className="mainbox">

                <div className="left-section">

                    <div className="ullist">
                        <ul>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Brand</a></li>
                            <li><a href="#">Enquiry</a></li>
                        </ul>
                    </div>

                    <button className="logout">Logout</button>

                </div>

                <div className="right-section">
                    <h1>Dashboard</h1>
                    <p>Welcome Admin</p>
                </div>

            </div>

        </div>
    )
}

export default Dashboard