import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
    orderType: "delivery", // default
    pickupTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.phone) {
      alert("Please fill in required fields!");
      return;
    }

    if (formData.orderType === "delivery" && !formData.address) {
      alert("Please provide delivery address!");
      return;
    }

    console.log("Order Data:", formData);
  }
  
  return (
    <div className='page-container'>
      <Header />
      <div className='content'>
        <h2 className="heading-home">Checkout</h2>
        <div className='checkout-container'>
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
            style={{
              textAlign: "left",
              lineHeight: "1.8em",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <table style={{ width: "100%", borderSpacing: "10px" }}>
              <tbody>
                <tr>
                  <td><label>Full Name <span style={{color: 'red'}}>*</span></label></td>
                  <td>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td><label>Email <span style={{color: 'red'}}>*</span></label></td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td><label>Phone <span style={{color: 'red'}}>*</span></label></td>
                  <td>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td><label>Order Type</label></td>
                  <td>
                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleChange}
                    >
                      <option value="dine-in">Dine In</option>
                      <option value="delivery">Delivery</option>
                      <option value="takeaway">Takeaway</option>
                    </select>
                  </td>
                </tr>

                {/* Conditional Fields */}

                {formData.orderType === "dine-in" && (
                  <>
                    <tr>
                      <td><label>Payment Method</label></td>
                      <td>
                        <select
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                        >
                          <option value="cod">Cash</option>
                          <option value="card">Credit/Debit Card</option>
                        </select>
                      </td>
                    </tr>
                  </>
                )}

                {formData.orderType === "delivery" && (
                  <>
                    <tr>
                      <td><label>Delivery Address <span style={{color: 'red'}}>*</span></label></td>
                      <td>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          style={{ width: "100%" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label>Payment Method</label></td>
                      <td>
                        <select
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                        >
                          <option value="cod">Cash on Delivery</option>
                          <option value="card">Credit/Debit Card</option>
                        </select>
                      </td>
                    </tr>
                  </>
                )}

                {formData.orderType === "takeaway" && (
                  <>
                    <tr>
                      <td><label>Pickup Time (optional)</label></td>
                      <td>
                        <input
                          type="time"
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label>Payment Method</label></td>
                      <td>
                        <select
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                        >
                          <option value="cod">Cash on Pickup</option>
                          <option value="card">Credit/Debit Card</option>
                        </select>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button type="submit" className="checkout-btn" style={{ padding: "10px 20px" }}>
                Place Order (Total: Rs.{totalPrice})
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
