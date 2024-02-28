import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Reducers/CartSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});

export default store;
