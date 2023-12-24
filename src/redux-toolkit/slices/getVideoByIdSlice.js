import { createSlice } from "@reduxjs/toolkit";
import { getVideoById } from "../actions/videos.action";

const getVideoByIdSlice=createSlice({
    name:"videoById",
    initialState:{
        isVideoLoading:false,
        videoData:{},
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideoById.pending,(state)=>{
            state.isVideoLoading=true;
        })
        builder.addCase(getVideoById.fulfilled,(state,action)=>{
            state.isVideoLoading=false;
            state.videoData=action.payload;
        })
        builder.addCase(getVideoById.rejected,(state,action)=>{
            state.isVideoLoading=false;
            state.error=action.payload;
        })
    }
})
export default getVideoByIdSlice.reducer;
