import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='user-header-container'>
            <div>
                <h1>Delights</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contactUs">Contact Us</Link></li>
                </ul>
            </div>
            <ul>
                <li className='login-link'><Link to="/login">Login</Link></li>
                <li className='signup-link'><Link to="/signUp">Sign Up</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
