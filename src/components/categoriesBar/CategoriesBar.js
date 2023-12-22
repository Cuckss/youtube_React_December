import React, { useEffect, useState } from "react";
import "./_categoriesBar.scss"
import { useSelector,useDispatch } from "react-redux";
import { getPopularvideos, getVideosByCategory } from "../../redux-toolkit/actions/videos.action";
const CategoriesBar=()=>{

    const keywords=[
        "All",
        "React.js",
        "Native.js",
        "Angular.js",
        "Coldplay",
        "Anuv jain",
        "Firebase",
        "Node.js",
        "Java",
        "Springboot",
        "Apna College",
        "Arijit Singh",
        "Indie Pop",
        "Charlie Puth",
        "King",
        "Taylor Swift",
    ]
   const[activeElement,setActiveElement]=useState("All");
    
    console.log(activeElement)
    const dispatch=useDispatch();
    //const{isLoading,categoryVideos}=useSelector((state)=>state.videoByCategory)
    // if(activeElement==""){
    //     dispatch(getPopularvideos());
    // }
     function handleClick(value){
    setActiveElement(value);
    dispatch(getVideosByCategory(value))
     }
    // console.log("category bar initail data is ",isLoading,categoryVideos)
    return(
        <div className="categoriesBar">
            {
                keywords.map((value,i)=>(
                    <span key={i} onClick={()=>handleClick(value)}
                    className={activeElement==value?"active":""}>{value}</span>
                ))
            }
           
        </div>
    )
}
export default CategoriesBar;