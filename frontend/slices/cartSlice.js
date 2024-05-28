import { createSlice } from "@reduxjs/toolkit";

const initialstate = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :
    { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducer: {

    }
})

export default cartSlice.reducer;