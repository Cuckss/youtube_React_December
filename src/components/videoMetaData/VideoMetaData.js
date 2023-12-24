import React,{useEffect} from "react"
import "./videoMetaData.scss"
import moment from "moment"
import numeral from "numeral"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReactShowMoreText from "react-show-more-text";
import { useDispatch,useSelector } from "react-redux";
import getChannelById, { checkSubscriptionStatus } from "../../redux-toolkit/actions/channel.action";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
const VideoMetaData=({videoData,videoId})=>{
  const dispatch=useDispatch();
    const[user]=useAuthState(auth)
  
  useEffect(()=>{
    if (videoData && videoData.snippet) {
      dispatch(getChannelById(videoData.snippet.channelId));
    }
    dispatch(checkSubscriptionStatus(videoData?.snippet?.channelId))
  },[dispatch,videoData])
  const{ isCommentLoading,commentsData}=useSelector((state)=>state.commentsById)
  const{ isChannelLoading,channelData}=useSelector((state)=>state.channelById)
  console.log("your channel initail data ",isChannelLoading,channelData)
  if (!videoData || !videoData.snippet) {
    return null; // or some default content, or an error message
  }

  
 
  const { snippet, statistics } = videoData;
    return(
        <div className="videoMetaData py-2">
          <div className="videoMetaData__top">
            <h5>{snippet.title}</h5>
            <div className="d-flex justify-content-between align-items-center py-1">
             <span>
             {numeral(`${statistics.viewCount}`).format("0.a")} Views •
             {moment(`${snippet.publishedAt}`).fromNow()}
             </span>
           
            <div>
                
                  <span className="mr-3"><ThumbUpOffAltIcon />
                  {numeral(`${statistics.likeCount}`).format("0.a")}</span>
                  <span className="mr-3">
                  <ThumbDownOffAltIcon/>
                  {numeral(`${statistics.dislikeCount}`).format("0.a")}
                  </span>
               
            </div>
            </div>
          </div>
          <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
           <div>
            <img src={channelData?.snippet?.thumbnails?.default?.url}
            alt="channel-icon"
            className="rounded-circle mr-3"/>
            <div className="d-flex flex-column">
               <span>{snippet.channelTitle}</span>
               <span> {numeral(`${channelData?.statistics?.subscriberCount}`).format("0.a")} Subscribers</span>
            </div>
           </div>
           <div className="d-flex">
            <button className="btn border-0 p-2 m-2">Subscribe</button>
           </div>
          </div>
          <div className="videoMetaData__description">
            <ReactShowMoreText
            lines={3}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="showMoreText"
            expanded={false}
            className="showMoreText"
            >
            {snippet.description}
            </ReactShowMoreText>
          </div>
        </div>
    )
}
export default VideoMetaData;