import { createSlice } from "@reduxjs/toolkit";
import { getPopularvideos } from "../actions/videos.action";
const popularVideosSlice=createSlice({
    name:"popularVideos",
    initialState:{
        isVideosLoading:false,
        data:{ result: [], nextPageToken: null},
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(getPopularvideos.pending,(state)=>{
            state.isVideosLoading=true;
        })
        builder.addCase(getPopularvideos.fulfilled,(state,action)=>{
            state.isVideosLoading=false;
            //  state.data=action.payload;
            state.data = {
                result:[...state.data.result,...action.payload.result],
                nextPageToken: action.payload.nextPageToken ,
        };
           
        })
        builder.addCase(getPopularvideos.rejected,(state,action)=>{
            state.isVideosLoading=false;
            state.error=action.payload;
        
        })
    }
})
export default popularVideosSlice.reducer;