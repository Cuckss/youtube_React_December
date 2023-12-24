import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api";
import { auth } from "../../firebase";

const getCommentsById=createAsyncThunk("byId/comments",async(id,thunkAPI)=>{
    try{
        const res=await request('/commentThreads',{
            params:{
                part:'snippet',
                videoId:id,
            },
        })
        
        return res.data.items;
    }catch(error){
        thunkAPI.rejectWithValue(error);
    }
})
export default getCommentsById;


export const addComment=createAsyncThunk("byId/comments",async(id,text,thunkAPI)=>{
    console.log("now new comments are------->")  
    try{
        const obj={
            snippet:{
                videoId:id,
                topLevelComment:{
                    snippet:{
                        textoriginal:text,
                    }
                }
            }
        }
        const accessToken = auth.currentUser.accessToken;
        console.log(accessToken)
        await request.post('/commentThreads',obj,{
            
            params:{
                part:'snippet',
            },
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })
        
       console.log("SUCCESS COMMENT ADDED------->")  
    }catch(error){
        thunkAPI.rejectWithValue(error);
    }
})