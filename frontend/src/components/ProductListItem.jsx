import React, { useState } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useProductStore } from '../store/product';
import Modal from './Modal';

const ProductListItem = ({ product }) => {
  const [updatedProduct, setUpdateProduct] = useState(product);

  const { deleteProduct, updateProduct } = useProductStore();
  const [showModal, setShowModal] = useState(false);

  const handleDeleteProduct = async (productId) => {
    const { success, message } = await deleteProduct(productId);
    console.log("Success:", success);
    console.log("Message:", message);
  };

  const handleUpdateProduct = async (productId, updatedProduct) => {
    const { success, message } = await updateProduct(productId, updatedProduct);
    console.log("Success:", success);
    console.log("Message:", message);
  }

  return (
    <>
      <tr>
        <td>
          <img src={product.image} alt={product.name} />
        </td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>Rs. {product.price}</td>
        <td>
          <div className='action-btn-container'>
            <button className="update-btn" onClick={() => setShowModal(true)}>
              <FiEdit />
            </button>
            <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        </td>
      </tr>

      {/* Update Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2>Update Product</h2>
          <div className='modal-form'>
            <input 
              placeholder='Product Name'
              name='name'
              value={updatedProduct.name}
              onChange={(e) => setUpdateProduct({...updatedProduct, name: e.target.value})}
            />
            <input
              placeholder='Product Description'
              name='price'
              value={updatedProduct.description}
              onChange={(e) => setUpdateProduct({...updatedProduct, description: e.target.value})}
            />
            <input
              placeholder='Product Price'
              name='price'
              value={updatedProduct.price}
              onChange={(e) => setUpdateProduct({...updatedProduct, price: e.target.value})}
            />
            <input
              placeholder='Image URL'
              name='image'
              value={updatedProduct.image}
              onChange={(e) => setUpdateProduct({...updatedProduct, image: e.target.value})}
            />
            <div className='modal-footer'>
              <button onClick={() => {handleUpdateProduct(product._id, updatedProduct); setShowModal(false);}}>Update</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
      </Modal>
    </>
  );
};

export default ProductListItem;