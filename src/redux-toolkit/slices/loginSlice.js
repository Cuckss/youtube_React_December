import { createSlice } from "@reduxjs/toolkit";

import loginUserWithGoogle from "../actions/loginAction";
const loginSlice=createSlice({
    name:"login",
    initialState:{
        isLoading:false,
        success:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUserWithGoogle.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(loginUserWithGoogle.fulfilled,(state)=>{
            state.success=true;
            state.isLoading=false;
           
        })
        builder.addCase(loginUserWithGoogle.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
    }
})
export default loginSlice.reducer;