import React,{useEffect,useState} from "react";
import "./_videos.scss"
import { FaEye } from "react-icons/fa";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from "react-router-dom";

const Videos=({video})=>{
   const[views,setViews]=useState("");
   const[duration,setDuration]=useState("");
   const[channelIcon,setChannelIcon]=useState("");
   const navigate=useNavigate();
  
 const _videoId=video.id?.videoId || video.id;
  useEffect(()=>{
      const getVideoDetails=async()=>{
        const items=await request("/videos",{
            params:{
                part:'contentDetails,statistics',
                id:_videoId
            }
        })
        const calculateDuration = () => {
            const seconds = moment.duration(items.data.items[0].contentDetails.duration).asSeconds();
            const _duration = moment.utc(seconds * 1000).format("mm:ss");
            setDuration(_duration);
          };
          const calculateView=()=>{
            setViews(items.data.items[0].statistics.viewCount)
          }
          calculateView()
    calculateDuration();
        //console.log("your getVideo details are: ",items);
      }
      getVideoDetails();
  },[_videoId])

  useEffect(()=>{
    const getChannelIcons=async()=>{
        const items=await request("/channels",{
            params:{
                part:"snippet",
                id:video.snippet.channelId,
            }
        })
        //console.log(items)
         return setChannelIcon(items.data.items[0].snippet.thumbnails.default.url)
    }
    getChannelIcons()
  },[video.snippet.channelId])

  function handleVideoPlay(){
    navigate(`/watch/${_videoId}`)
  }
    return(
        <div className="video" onClick={handleVideoPlay}>
        <div className="video__top">
            {/* <img src={video.snippet.thumbnails.high.url} alt="thumbnail image"/> */}
            <LazyLoadImage src={video.snippet.thumbnails.high.url} effect="blur"/>
            <span className="video__top__duration">{duration}</span>
            </div>    
        <div className="video__title">
            {video.snippet.title}
            </div>    
        <div className="video__details">
            <span>
            <FaEye/> {numeral(views).format("0.a")} Views •
            </span>
            <span>
                {moment(video.snippet.publishedAt).fromNow()}
            </span>
            </div>    
        <div className="video__channel">
            {/* <img src={channelIcon} alt="channel image"/> */}
            <LazyLoadImage src={channelIcon} effect="blur"/>
            <p>{video.snippet.channelTitle}</p>
            </div>    
        </div>
    )
}
export default Videos 