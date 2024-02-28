import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Reducers/CartSlice";
import SubTotalSlice from "./Reducers/SubTotalSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice,
        subTotal: SubTotalSlice,
    },
});

export default store;
