import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api";

const getChannelById=createAsyncThunk("byId/channel",async(id,thunkAPI)=>{
    try{
        const res=await request('/channels',{
            params:{
                part:'snippet,statistics,contentDetails',
                id:id,
            },
        })
       // console.log("your channel details are: ",res.data.items[0])
        return res.data.items[0];
    }catch(error){
        thunkAPI.rejectWithValue(error);
    }
})
export default getChannelById;

export const  checkSubscriptionStatus=createAsyncThunk("subscription/check",async(id,thunkAPI)=>{
    
    try{
        const res=await request('/subscriptions',{
            params:{
                part:'snippet',
                forChannelId:id,
                mine:true,
            },
            headers:{
                Authorization:`Bearer ${thunkAPI.getState().auth.accessToken}`
            }
        })
       // console.log("your channel subscription details are: ",res)
        return res;
    }catch(error){
        thunkAPI.rejectWithValue(error);
    }
})
