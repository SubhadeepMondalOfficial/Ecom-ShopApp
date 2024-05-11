import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

export const CartSlice = createSlice({
  name: "cartItemCount",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload);
    },
    removeCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCartItem, removeCartItem } = CartSlice.actions;

export default CartSlice.reducer;
