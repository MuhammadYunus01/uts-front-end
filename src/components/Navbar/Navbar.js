import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="container-navbar">
        <div className="navbar">
            <div className="navbar-title">
                <h1>Covid ID</h1>
            </div>
            <div className="navbar-nav">
                <ul>
                    <li>Global</li>
                    <li>Indonesia</li>
                    <li>Provinsi</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar