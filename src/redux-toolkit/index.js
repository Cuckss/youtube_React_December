import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import popularVideosSlice from "./slices/popularVideosSlice";
import getVideosByCategorySlice from "./slices/getVideosByCategorySlice";
const store=configureStore({
    reducer:{
    loginUser:loginSlice,
     popularVideos:popularVideosSlice,
     videoByCategory:getVideosByCategorySlice
    }
})
export default store;