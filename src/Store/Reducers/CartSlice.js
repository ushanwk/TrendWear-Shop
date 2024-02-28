import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {index: 0, count: 0,},
    {index: 1, count: 0,},
    {index: 2, count: 0,},
    {index: 3, count: 0,},
    {index: 4, count: 0,},
    {index: 5, count: 0,},
    {index: 6, count: 0,},
    {index: 7, count: 0,},
    {index: 8, count: 0,},
];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state[action.payload].count += 1;
        },
        removeFromCart: (state, action) => {
            state[action.payload].count -= 1;
        }
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
