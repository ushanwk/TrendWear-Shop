import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    total: 0
}

const SubTotalSlice = createSlice({
    name: 'subTotal',
    initialState,
    reducers: {
        incrementTotal: (state, action) => {
            state.total += action.payload;
        },
        decrementTotal: (state, action) => {
            state.total -= action.payload;
        }
    }
});

export const {incrementTotal, decrementTotal} = SubTotalSlice.actions;
export default SubTotalSlice.reducer;
