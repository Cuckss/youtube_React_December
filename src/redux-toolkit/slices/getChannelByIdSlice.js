import { createSlice } from "@reduxjs/toolkit";
import getChannelById from "../actions/channel.action";
const getChannelByIdSlice=createSlice({
    name:"channelById",
    initialState:{
        isChannelLoading:false,
        channelData:{},
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(getChannelById.pending,(state)=>{
            state.isChannelLoading=true;
        })
        builder.addCase(getChannelById.fulfilled,(state,action)=>{
            state.isChannelLoading=false;
            state.channelData=action.payload;
        })
        builder.addCase(getChannelById.rejected,(state,action)=>{
            state.isChannelLoading=false;
            state.error=action.payload;
        })
    }
})
export default getChannelByIdSlice.reducer;