import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div>
        <div className="product-card-container">
          {/* Left Side */}
          <Link to={`/product/${product._id}`}>
          <div className="product-card-image-container">
            <img src={product.image} alt={product.name} />
          </div>
          </Link>
          {/* Right Side */}
          <div className="product-card-content-container">
            <p style={{ fontWeight: 600, fontSize: 'large'}}>
              <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'black'}}>{product.name}</Link>
            </p>
            <p style={{ lineHeight: '1.5em', height: '70px'}}>{product?.description.length > 70 ? `${product.description.slice(0, 70)}...` : product?.description}</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <p style={{ fontWeight: 600}}>Rs. {product.price}</p>
              <button style={{ backgroundColor: '#404040', height: 'fit-content', padding: '8px 18px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
