import {createSlice} from "@reduxjs/toolkit";
import data from "../../Data/Data";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let isAdded = false;

            for(let i = 0; i < state.length; i++){
                if(state[i].number === action.payload){
                    isAdded = true;
                }
            }

            if (!isAdded){
                state.push({
                    number: action.payload,
                    count: 1,
                });
            }
        },
        removeFromCart: (state, action) => {
            state.splice(action.payload, 1);
        },
        increment: (state, action) => {
            state[action.payload].count++;
        },
        decrement: (state, action) => {
            if(state[action.payload].count > 1){
                state[action.payload].count--;
            }
        }
    },
});

export const {addToCart, removeFromCart, increment, decrement} = cartSlice.actions;
export default cartSlice.reducer;
