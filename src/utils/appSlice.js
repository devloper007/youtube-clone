import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState:{
        menuToggle: false
    },
    reducers:{
        addToggleMenu:(state, action) =>{
            state.menuToggle = action.payload;
        }
    }
});

export const { addToggleMenu } = appSlice.actions;
export default appSlice.reducer;