import React from 'react'
import './CSS/Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="box">
                Welcome to Dashboard 👋
                <br />

            Welcome back! You have successfully logged in
            </div>

        </>
        // <div className="dashboard">

        //     <aside className="sidebar">
        //         <div className="logo">
        //             <span>⚡</span> AdminPanel
        //         </div>

        //         <ul className="menu">
        //             <li className="active">🏠 Dashboard</li>
        //             <li>👤 Users</li>
        //             <li>🛒 Products</li>
        //             <li>📦 Orders</li>
        //             <li>💰 Payments</li>
        //             <li>📊 Reports</li>
        //             <li>⚙️ Settings</li>
        //         </ul>

        //         <div className="logout">
        //             🚪 Logout
        //         </div>
        //     </aside>

        //     <main className="main-content">

        //         <nav className="topbar">
        //             <div>
        //                 <h4>Dashboard</h4>
        //                 <p>Welcome back, Admin 👋</p>
        //             </div>

        //             <div className="profile">
        //                 <div className="profile-img">A</div>
        //                 <div>
        //                     <strong>Admin</strong>
        //                     <small>Administrator</small>
        //                 </div>
        //             </div>
        //         </nav>

        //         <section className="stats">

        //             <div className="stat-card">
        //                 <div className="stat-icon blue">👥</div>
        //                 <div>
        //                     <p>Total Users</p>
        //                     <h3>1,250</h3>
        //                     <span>+12% this month</span>
        //                 </div>
        //             </div>

        //             <div className="stat-card">
        //                 <div className="stat-icon green">💰</div>
        //                 <div>
        //                     <p>Total Revenue</p>
        //                     <h3>₹85,450</h3>
        //                     <span>+18% this month</span>
        //                 </div>
        //             </div>

        //             <div className="stat-card">
        //                 <div className="stat-icon orange">📦</div>
        //                 <div>
        //                     <p>Total Orders</p>
        //                     <h3>856</h3>
        //                     <span>+8% this month</span>
        //                 </div>
        //             </div>

        //             <div className="stat-card">
        //                 <div className="stat-icon purple">🛍️</div>
        //                 <div>
        //                     <p>Total Products</p>
        //                     <h3>324</h3>
        //                     <span>+5% this month</span>
        //                 </div>
        //             </div>

        //         </section>

        //         <section className="dashboard-grid">

        //             <div className="dashboard-box">
        //                 <div className="box-header">
        //                     <h5>Recent Orders</h5>
        //                     <button className="btn btn-primary btn-sm">
        //                         View All
        //                     </button>
        //                 </div>

        //                 <div className="table-responsive">
        //                     <table className="table align-middle">
        //                         <thead>
        //                             <tr>
        //                                 <th>Order ID</th>
        //                                 <th>Customer</th>
        //                                 <th>Product</th>
        //                                 <th>Amount</th>
        //                                 <th>Status</th>
        //                             </tr>
        //                         </thead>

        //                         <tbody>
        //                             <tr>
        //                                 <td>#1001</td>
        //                                 <td>Shalu</td>
        //                                 <td>Laptop</td>
        //                                 <td>₹45,000</td>
        //                                 <td>
        //                                     <span className="status success">
        //                                         Completed
        //                                     </span>
        //                                 </td>
        //                             </tr>

        //                             <tr>
        //                                 <td>#1002</td>
        //                                 <td>Yash</td>
        //                                 <td>Headphones</td>
        //                                 <td>₹2,500</td>
        //                                 <td>
        //                                     <span className="status pending">
        //                                         Pending
        //                                     </span>
        //                                 </td>
        //                             </tr>

        //                             <tr>
        //                                 <td>#1003</td>
        //                                 <td>Rahul</td>
        //                                 <td>Keyboard</td>
        //                                 <td>₹1,800</td>
        //                                 <td>
        //                                     <span className="status success">
        //                                         Completed
        //                                     </span>
        //                                 </td>
        //                             </tr>

        //                             <tr>
        //                                 <td>#1004</td>
        //                                 <td>Priya</td>
        //                                 <td>Smart Watch</td>
        //                                 <td>₹5,999</td>
        //                                 <td>
        //                                     <span className="status cancelled">
        //                                         Cancelled
        //                                     </span>
        //                                 </td>
        //                             </tr>
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             </div>

        //             <div className="dashboard-box quick-box">
        //                 <h5>Quick Actions</h5>

        //                 <button className="quick-btn">
        //                     ➕ Add Product
        //                 </button>

        //                 <button className="quick-btn">
        //                     👤 Add User
        //                 </button>

        //                 <button className="quick-btn">
        //                     📦 Manage Orders
        //                 </button>

        //                 <button className="quick-btn">
        //                     📊 View Reports
        //                 </button>
        //             </div>

        //         </section>

        //     </main>
        // </div>
    )
}

export default Dashboard