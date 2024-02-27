import {configureStore} from "@reduxjs/toolkit";
import CartSliceReducer from "./Reducers/CartSlice";


const Store = configureStore({
    reducer: {
        cartSliceReducer: CartSliceReducer,
    }
});

export default Store;
