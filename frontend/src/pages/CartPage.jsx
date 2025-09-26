import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../redux/features/counter/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleRemovefromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <div className='page-container'>
      {/* Nav Bar */}
      <Header />

      {/* Cart Section */}
      <div className='content'>
        <div style={{ width: '75%', margin: '20px auto', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{marginTop: '10px'}}>Shopping Cart</h3>
                <button 
                    onClick={handleClearCart}
                    style={{backgroundColor: 'red', color: 'white', fontWeight: 'bold', borderColor: 'red', padding: '8px 20px'}}>
                        Clear Cart
                </button>
            </div>
            <hr style={{ margin: '10px 0' }} />
            {/* If Cart has items, show them here */}
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', padding: '20px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={item.image} alt={item.name} style={{ height: '160px', width: '220px', border: '1px solid black', marginRight: '15px' }} />
                        <div style={{ textAlign: 'left' }}>
                            <h4>{item.name}</h4>
                            <p>Rs. {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleRemovefromCart(item._id)}
                        style={{ backgroundColor: '#404040', height: '30px', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                            Remove
                    </button>
                </div>
              ))
            ) : (
                <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Your Cart is Empty</h3>
            )}
            {/* Total and Checkout Button */}
            <hr style={{ margin: '10px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Total: Rs. {totalPrice ? totalPrice : 0}</h3>
                <Link to="/checkout">
                    <button style={{backgroundColor: 'green', color: 'white', fontWeight: 'bold', borderColor: 'green', padding: '8px 20px'}}>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
