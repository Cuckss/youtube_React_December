import React,{useState,useEffect} from "react";
import "./comments.scss"
import Comment from "../comment/Comment";
import { useSelector,useDispatch } from "react-redux";
import getCommentsById, { addComment } from "../../redux-toolkit/actions/comments.action";
import { auth } from "../../firebase";
const Comments=({videoId})=>{
  console.log("the auth is->.....",auth)
  const dispatch=useDispatch()
  const{ addingComment,commentAdded,error}=useSelector((state)=>state.addComment);
  console.log("comment adding status is:",addingComment,commentAdded,error)
  const[text,setText]=useState("");
    function handleComment(e){
      e.preventDefault();
      if(text.length===0){
        return;
      }
       dispatch(addComment( videoId,text))
       setText("")
    }
    useEffect(()=>{
 dispatch(getCommentsById(videoId))
    },[dispatch])
    const{ isCommentLoading,commentsData}=useSelector((state)=>state.commentsById)
    //console.log("comments are : ",isCommentLoading,commentsData)
    return(
        <div className="comments">
            <p>1234 comments</p>
            <div className="comments__form d-flex w-100 my-2">
              <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="rounded-circle mr-3"
              /> 
              <form onSubmit={handleComment} className="d-flex flex-grow-1">
                <input type='text'
                className="flex-grow-1"
                placeholder="Write a comment..."
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
                <button className="border-0 p-2">Comment</button>
              </form>
            </div>
        <div className="comments__list">
              {commentsData && commentsData.map((commentData,i)=>(
                <Comment commentData={commentData} key={i}/>
              ))}
        </div>
        </div>
    )
}
export default Comments;