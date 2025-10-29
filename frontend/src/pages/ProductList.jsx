import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import Modal from '../components/Modal';
import ProductListItem from '../components/ProductListItem';
import AdminLayout from '../pages/AdminLayout';

const ProductList = () => {
    const {fetchProducts, products} = useProductStore();

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);
  
    console.log(products);
    
    return (
      <>
        <AdminLayout />
        <div className='content-container'>
          <h1>Current Products</h1>

          <table className='product-list'>
            <tr>
              <th>Product</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Actions</th>
            </tr>
            {products.map((product) => (
              <ProductListItem key={product._id} product={product} />
            ))}
          </table>

          {products.length === 0 && (
            <>
              <h4>No products found</h4>
              <Link to={"/create"}>
                <p>Add a product</p>
              </Link>
            </>
          )}
  
          <Modal/>
        </div>
      </>
    )
}

export default ProductList
