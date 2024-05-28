import { createSlice } from "@reduxjs/toolkit";

const initialstate = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :
    { cartItems: [] };

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducer: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItems = state.cartItems.find((x) => {
                x._id === item._id
            });

            if (existItems) {
                state.cartItems = state.cartItems.map((x) => {
                    x._id === existItems._id ? item : x
                });

            }
            else {
                state.cartItems = [...state.cartItems, item]
            }

            //calculate item Pricing
            state.itemPrice = addDecimals(state.cartItems.reduce((acc, item) =>
                acc + item.price * item.qty, 0
            ))

            //calculate Shipping Pricing (order>$100==free||10$)
            state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

            //calculate Tax Pricing(15% tax)
            state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)))

            //calculate Total Pricing
            state.totalPrice = (
                Number(state.itemPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2);

            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
})

export const { addToCart } = createSlice.actions;
export default cartSlice.reducer;