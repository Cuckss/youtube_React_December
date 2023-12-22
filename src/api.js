import axios from "axios";
import { useContext } from "react";
import { YoutubeApiKeyContext } from "./YoutubeApiKeyContext";
const API_KEY="AIzaSyB4xubm1ahtngDTZnhF_YNtMh6ESdtXrc0"
const request=
    // const{API_KEY}=useContext(YoutubeApiKeyContext)
  
     axios.create(
    {
    
    baseURL:'https://youtube.googleapis.com/youtube/v3',
    params:{
        key:API_KEY,
    }
})

export default request;