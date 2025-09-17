import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state,action) => {
            //Mutating the state variable here - allowed in Redux Toolkit
            state.items.push(action.payload);
        },
        removeItems: (state,action)=> {
            state.items.pop();
        },
        clearItems: (state,action)=>{
            state.items = [];
        }
    },
});

export const {addItems, removeItems, clearItems} = cartSlice.actions;

export default cartSlice.reducer;



