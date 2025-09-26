import React from 'react'

import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
    console.log("Google Sign-In clicked");
  }

  return (
    <div>
      <div className='login-form-container'>
        <div className='form-container'>
            <h1>Sign Up</h1>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email", { required: true })}
                  type='email' 
                  placeholder='Email'
                  name='email'
                />

                <input
                  {...register("password", { required: true })}
                  type='password'
                  placeholder='Password'
                  name='password'
                />

                <button className='login-btn' onClick={handleGoogleSignIn}>Sign Up</button>
            </form>

            <p>Already have an account? <Link to={'/login'} style={{ textDecoration: 'none'}}>Login</Link></p>

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

export default SignUp