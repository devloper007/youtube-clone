import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState:{
        menuToggle: false,
        videoInfo: []
    },
    reducers:{
        addToggleMenu:(state,action) =>{
            console.log('togg');
            state.menuToggle = action.payload;
        },
        addVideoInfo:(state,action) =>{
            console.log('video info', action.payload);
            state.videoInfo = action.payload;
        }
    }
});

export const { addToggleMenu, addVideoInfo } = appSlice.actions;
export default appSlice.reducer;