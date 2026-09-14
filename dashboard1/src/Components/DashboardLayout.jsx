
import React from 'react'
import './CSS/DashboardLayout.css'
import { IoCloseSharp } from "react-icons/io5"
import { MdAccountCircle, MdKeyboardArrowDown } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { CiLogout } from "react-icons/ci";

const DashboardLayout = ({ children }) => {
  const handleLogout = () => {
    alert("Hello World")
  };

  return (
    <div className="dashboardLayout-outer">

      <div className="dashboardLayout-sidebar">

        <div className="sidebar-top">
          <div className="sidebar-logo">
            <h1>Dashboard</h1>
          </div>
        </div>

        <div className="sidebar-menu">
          <ul>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

        <div className="sidebar-bottom">
          <button onClick={handleLogout}>
            <CiLogout />
            Logout
          </button>

        </div>

      </div>

      <div className="dashboardLayout-main">

        <div className="dashboardLayout-header">

          <div className="header-first">

            <div className="sidebar-close-btn">
              <IoCloseSharp />
            </div>

            <h1>Welcome Back Admin!</h1>

          </div>

          <div className="dashoardLayoutAdmin">
            <MdAccountCircle />
            <span>Admin</span>
            <MdKeyboardArrowDown />
          </div>

        </div>

        <div className="dashboardLayout-content">
          <div className="main-content">
            {children}

          </div>
        </div>

      </div>

    </div>
  )
}

export default DashboardLayout

