import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import HomeScreen from "./pages/homeScreen/HomeScreen";
import "./_app.scss"
import { useEffect, useState } from "react";
import LoginScreen from "./pages/loginScreen/LoginScreen";
import { Outlet, Route,Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useContext } from "react";
import { YoutubeApiKeyContext } from "./YoutubeApiKeyContext";
import { useSelector,useDispatch } from "react-redux";
//import { getPopularVideos } from "./redux-toolkit/actions/videos.action";
import { getPopularvideos } from "./redux-toolkit/actions/videos.action";
import WatchScreen from "./pages/watchScreen/WatchScreen";
function App() {
    //  console.log("your api key is ---->",process.env.REACT_APP_YOUTUBE_API_KEY)
       const dispatch=useDispatch();
      const{API_KEY}=useContext(YoutubeApiKeyContext)
      // console.log(API_KEY);
  const[user]=useAuthState(auth);
  const withAuthorization=(WrappedComponent)=>{
    return(props)=>{
      if(user){
        return<WrappedComponent {...props}/>
      }else{
        return<LoginScreen/>
      }
    }
  } 
  const ProtectedHomeScreen=withAuthorization(HomeScreen);
  const Layout=()=>{
    const[sidebar,setSidebar]=useState(false);
  const handleSideBarToggle=()=>{
    setSidebar(!sidebar);
  }
    return(
  <>
   <Header handleSideBarToggle={handleSideBarToggle}/>
    <div className="app_container  border-info">
      <SideBar sidebar={sidebar} handleSideBarToggle={handleSideBarToggle}/>
      <Container fluid className="app_main  border-warning">
        <Outlet/>
      </Container>
    </div>
    </>
    )
  }
 
  return (
   <>
   <Routes>
         <Route path="/login" element={<LoginScreen/>}/>
         <Route path="/" element={<Layout/>}>
             <Route path="" element={<ProtectedHomeScreen/>}/>
             <Route path="/watch/:id" element={<WatchScreen/>}/>
         </Route>
          
   </Routes>
    
    
   </>
  );
}

export default App;
