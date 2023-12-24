import React from "react";
import "./comment.scss"
import moment from "moment";
const Comment=({commentData})=>{
    return(
        <div className="comment p-2 d-flex ">
            <img src={commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
              alt=""
              className="rounded-circle mr-3"
              /> 
              <div className="comment__body">
                <p className="comment__header mb-1">
                    {commentData?.snippet?.topLevelComment?.snippet?.authorDisplayName}•{moment(`${commentData?.snippet?.topLevelComment?.snippet?.publishedAt}`).fromNow()}
                </p>
                <p className="mb-0">{commentData?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
              </div>
        </div>
    )
}
export default Comment;