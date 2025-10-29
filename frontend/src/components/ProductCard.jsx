import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { addToCart } from '../redux/features/counter/cartSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`, { state: {product} });
  }

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1}));
  }

  return (
    <div>
        <div className="product-card-container">
          {/* Left Side */}
          <div className="product-card-image-container" onClick={handleClick}>
            <img src={product.image} alt={product.name} />
          </div>

          {/* Right Side */}
          <div className="product-card-content-container">
            <p style={{ fontWeight: 600, fontSize: 'large'}}>
              {product.name}
            </p>
            <p style={{ lineHeight: '1.5em', height: '70px'}}>{product?.description.length > 70 ? `${product.description.slice(0, 70)}...` : product?.description}</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <p style={{ fontWeight: 600}}>Rs. {product.price}</p>
              <button
                style={{ backgroundColor: '#404040', height: 'fit-content', padding: '8px 18px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
