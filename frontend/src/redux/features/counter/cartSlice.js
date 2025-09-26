import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.cartItems.push(action.payload);
        alert("Item added to cart successfully");
      } else {  
        alert("Item already in cart");
      }
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    },
    clearCart: (state) => {
        state.cartItems = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer