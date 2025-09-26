import React from 'react'

import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(watch("example")); // watch input value by passing the name of it

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
    console.log("Google Sign-In clicked");
  }

  return (
    <div>
      <div className='login-form-container'>
        <div className='form-container'>
            <h1>Login</h1>
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

                <button className='login-btn'>Login</button>
            </form>

            <p>Haven't an account? <Link to={'/signUp'} style={{ textDecoration: 'none'}}>Sign Up</Link></p>

            <div className='or-divider'>
              <hr />
              <span>or</span>
              <hr />
            </div>

            <button className='signIn-with-btn' onClick={handleGoogleSignIn}><FaGoogle />  Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login