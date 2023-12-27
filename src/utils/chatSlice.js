import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        chatInfo:[]
    },
    reducers:{
        addNewChat:(state, action) =>{
            if(state.chatInfo && state.chatInfo.length > 5){
                state.chatInfo.splice(50,1);
            }
            console.log('new chat',action.payload);
            state.chatInfo.unshift(action.payload);
        }
    }
});

export const {addNewChat} = chatSlice.actions;
export default chatSlice.reducer;