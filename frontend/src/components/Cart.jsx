import React, { useState } from 'react'

import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)


  return (
    <div className='cart-container'>
        <Link to={'/cart'}>
          <FaCartShopping className='cart-icon' />
        </Link>
        <span className='cart-value'>{ cartItems.length }</span>
    </div>
  )
}

export default Cart
