import { HOME_VIDEOS_REQUEST } from "../reduxActionTypes/actionTypes";
import request from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import popularVideosSlice from "../slices/popularVideosSlice";
export const getPopularvideos=createAsyncThunk("popular/videos",async(_,thunkAPI)=>{
    // const { nextPageToken } = thunkAPI.getState().popularVideos.data;
    
    try{
        const nextPageToken = thunkAPI.getState().popularVideos.data.nextPageToken ?? null;
        console.log("popularvideos page token is : ",nextPageToken) 
       const res=await request('/videos',{
           params:{
            part:"snippet,contentDetails,statistics",
            chart:"mostPopular",
            regionCode:"IN",
             pageToken:nextPageToken,
            maxResults:20
           }
       })
       
     //  console.log(res)
       //console.log("video.js se content ki baarish")
       return{
         result:res.data.items,
         nextPageToken:res.data.nextPageToken,

       }
//    return res.data.items;
    }catch(error){
        thunkAPI.rejectWithValue(error.message)
    }
    
})

 

export const getVideosByCategory=createAsyncThunk("byCategory/videos",async(keyword,thunkAPI)=>{
    // const{data}=useSelector((state)=>state.popularVideos)
  
       const { nextPageToken } = thunkAPI.getState().popularVideos.data; 
       console.log("your next page token is :",nextPageToken)
     
    try{
       const res=await request('/search',{
           params:{
            part:"snippet",
            maxResults:20,
            pageToken:nextPageToken,
            q:keyword,
            type:'video'
           }
       })
    console.log("get videos by category",res.data.items)
       return res.data.items;
    // return res.data.items;
    }catch(error){
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getVideoById=createAsyncThunk("byId/video",async(id,thunkAPI)=>{
    try{
        const res=await request('/videos',{
            params:{
                part:"snippet,statistics",
                id:id,
            }
        })
        console.log("the video by id is:--->",res.data.items[0]);
        return res.data.items[0];
    }
    catch(error){
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})
