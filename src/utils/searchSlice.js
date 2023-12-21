import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name:"search",
    initialState:{
        cache:{}
    },
    reducers:{
        cacheResult:(state,action) =>{
            console.log('cache action',action);
            state.cache = {...state.cache, ...action.payload}
            console.log('cache',state.cache);
        }
    }
});

export const {cacheResult} = searchSlice.actions;

export default searchSlice.reducer;