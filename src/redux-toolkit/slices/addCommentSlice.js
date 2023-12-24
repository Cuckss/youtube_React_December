import { createSlice } from "@reduxjs/toolkit";
import { addComment } from "../actions/comments.action";

const addCommentSlice=createSlice({
    name:"addComment",
    initialState:{
        addingComment:false,
        commentAdded:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(addComment.pending,(state)=>{
            state.addingComment=true;
        })
        builder.addCase(addComment.fulfilled,(state)=>{
            state.addingComment=false;
            state.commentAdded=true;
        })
        builder.addCase(addComment.rejected,(state)=>{
            state.addingComment=false;
            state.error=true;
        })
    }
})
export default addCommentSlice.reducer;