import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        quantityAvailable: "",
        image: "",
    });

    const { createProduct } = useProductStore();

    const handleAddProduct = async() => {
        const {success, message} = await createProduct(newProduct);
        console.log("Success:", success);
        console.log("Message:", message);
    };

    return (
        <div className='content-container'>
        <div className='product-form-container'>
            <h1>Add a new Product</h1>
            <div className='product-form'>
                <input 
                    placeholder='Product Name'
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />

                <input
                    placeholder='Product Description'
                    name='description'
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />

                <input
                    placeholder='Product Price'
                    name='price'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />

                <input
                    placeholder='Quantity Available'
                    name='quantityAvailable'
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({...newProduct, quantityAvailable: e.target.value})}
                />

                <input
                    placeholder='Image URL'
                    name='image'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />

                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
        </div>
    )
}

export default AddProduct
