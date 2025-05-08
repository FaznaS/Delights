import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="product-card-container">
        <div className="product-card-image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <p>{product.name}</p>
        <p>Rs. {product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
