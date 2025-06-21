import React from 'react'

import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className='login-form-container'>
        <div className='form-container'>
            <h1>Login</h1>
            <form className='login-form'>
                <input 
                  placeholder='Email'
                  name='email'
                />

                <input
                  placeholder='Password'
                  name='password'
                />

                <button className='login-btn'>Login</button>
            </form>

            <p>Haven't an account? <Link to={'/signUp'} style={{ textDecoration: 'none'}}>Sign Up</Link></p>

            <div className='or-divider'>
              <hr />
              <span>or</span>
              <hr />
            </div>

            <button className='signIn-with-btn'><FaGoogle />  Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login