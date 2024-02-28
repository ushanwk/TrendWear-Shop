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
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
