import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='user-header-container'>
            <div>
                <h1>Delights</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <ul>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
