import React from "react";
import "./_sideBar.scss"
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { MdSubscriptions,MdHistory,MdThumbUp,MdExitToApp,MdLibraryBooks,MdHome, MdSentimentDissatisfied } from "react-icons/md";
const SideBar=({sidebar,handleSideBarToggle})=>{
  const navigate=useNavigate()
    const signoutUser=async()=>{
        await signOut(auth)
        navigate("/login")        
    }
    return(
        <nav className={sidebar?"sidebar open":"sidebar"} onClick={handleSideBarToggle}>
        <li>
            <MdHome size={23}/>
            <span>Home</span>
        </li>
        <li>
            <MdSubscriptions size={23}/>
            <span>Subscriptions</span>
        </li>
        <li>
            <MdThumbUp size={23}/>
            <span>Liked Videos</span>
        </li>
        <li>
            <MdHistory size={23}/>
            <span>History</span>
        </li>
        <li>
            <MdLibraryBooks size={23}/>
            <span>Library</span>
        </li>
        <li>
            <MdSentimentDissatisfied size={23}/>
            <span>I Don't Know</span>
        </li>
        <hr/>
        <li>
            <MdExitToApp size={23}/>
            <span onClick={signoutUser}>Log out</span>
        </li>
        <hr/>
        </nav>
    )
}
export default SideBar