import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import popularVideosSlice from "./slices/popularVideosSlice";
import getVideosByCategorySlice from "./slices/getVideosByCategorySlice";
import getVideoByIdSlice from "./slices/getVideoByIdSlice";
import getChannelByIdSlice from "./slices/getChannelByIdSlice";
import getCommentsByIdSlice from "./slices/getCommentsByIdSlice";
import addCommentSlice from "./slices/addCommentSlice";
const store=configureStore({
    reducer:{
    loginUser:loginSlice,
     popularVideos:popularVideosSlice,
     videoByCategory:getVideosByCategorySlice,
     videoById:getVideoByIdSlice,
     channelById:getChannelByIdSlice,
     commentsById:getCommentsByIdSlice,
     addComment:addCommentSlice,
    }
})
export default store;