import { createSlice } from "@reduxjs/toolkit";
import { getVideosByCategory } from "../actions/videos.action";
const getVideosByCategorySlice=createSlice({
    name:"videosByCategory",
    initialState:{
        isLoading:false,
        categoryVideos:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideosByCategory.pending,(state)=>{
           state.isLoading=true;
        })
        builder.addCase(getVideosByCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.categoryVideos=action.payload;
        })
        builder.addCase(getVideosByCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
    }
})
export default getVideosByCategorySlice.reducer;