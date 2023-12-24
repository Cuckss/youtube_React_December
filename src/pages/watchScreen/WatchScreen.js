import React,{useEffect} from "react";
import "./_watchScreen.scss"
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import Comments from "../../components/comments/Comments";
import VideoVertical from "../../components/videoVertical/VideoVertical";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../redux-toolkit/actions/videos.action";
import { useSelector,useDispatch } from "react-redux";
import getChannelById from "../../redux-toolkit/actions/channel.action";
const WatchScreen=()=>{
    const dispatch=useDispatch()
    const{id}=useParams();
    const{ isVideoLoading,videoData,error}=useSelector((state)=>state.videoById)
    console.log("initial video data is--->",isVideoLoading,videoData,error)
    console.log(id)
     useEffect(()=>{
        dispatch(getVideoById(id));
       
     },[dispatch,id])
    // dispatch(getVideoById(id));
     console.log("hiiiiii dhruvvvv")
    return(
          <Row>
            <Col lg={8}>
                <div className="watchscreen__player">
                <iframe  
           src={`https://www.youtube.com/embed/${id}`}
           frameBorder="0"
            title={videoData?.snippet?.title}
           
           allowFullScreen
           width="100%"
           height="100%"
           ></iframe>
                </div>
              {
                videoData&&videoData!=undefined ? (<VideoMetaData videoData={videoData} videoId={id}/>):(<h2>loading....</h2>)
              }  
                <Comments  videoId={id}/>
            </Col>
            <Col lg={4}>
                {
                    [...Array(10)].map(()=>(
                        <VideoVertical/>
                    ))
                }
            </Col>
          </Row>
    )
}
export default WatchScreen;