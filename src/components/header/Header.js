import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { MdApps } from "react-icons/md";

const Header=({handleSideBarToggle})=>{
    return(
        <div className="border border-dark header">
          <FaBars className="header__menu" onClick={handleSideBarToggle} size={26}/>
          <img src="https://img.icons8.com/?size=96&id=19318&format=png"
          alt="yt-icon"
          className="header__logo"/>
          <form>
            <input type="text" placeholder="Search"/>
            <button type="submit"><AiOutlineSearch size={22}/></button>
          </form>
          <div className="header__icons">
          <MdNotificationsNone size={28}/>
          <MdApps size={28}/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdwx1VkxxrJsB2pLo902juogTKFsEwUwVjx_12KiK6BNS_FEFwLZISW5BIQ&s"
          alt="avatar"/>
          </div>
        </div>
    )
}
export default Header