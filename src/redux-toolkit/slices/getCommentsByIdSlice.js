import { createSlice } from "@reduxjs/toolkit";
import getCommentsById from "../actions/comments.action";
const getCommentsByIdSlice=createSlice({
    name:"commentsById",
    initialState:{
        isCommentLoading:false,
         commentsData:[],
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(getCommentsById.pending,(state)=>{
            state.isCommentLoading=true;
        })
        builder.addCase(getCommentsById.fulfilled,(state,action)=>{
            state.isCommentLoading=false;
            state.commentsData=action.payload;
        })
        builder.addCase(getCommentsById.rejected,(state,action)=>{
            state.isCommentLoading=false;
            state.error=action.payload;
        })
    }
})
export default getCommentsByIdSlice.reducer;