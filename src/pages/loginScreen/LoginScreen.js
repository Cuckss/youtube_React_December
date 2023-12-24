import React, { useEffect } from "react";
import "./_loginScreen.scss"
import { useSelector,useDispatch } from "react-redux";
import loginUserWithGoogle from "../../redux-toolkit/actions/loginAction";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const LoginScreen=()=>{
    const[user]=useAuthState(auth)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{isLoading,success}=useSelector((state)=>state.loginUser)
    console.log("the user data is ",isLoading,success)
    //console.log(isLoading)
    useEffect(()=>{
      if(user){
        navigate("/")
       // console.log(user);
      }
    },[user])
    function login(){
        dispatch(loginUserWithGoogle());
         navigate("/")
    }
    return(
        <div className="login">
            <div className="login__container">
               <img src="https://img.icons8.com/?size=96&id=19318&format=png" alt="Youtube-icon"/>
               <button onClick={login}>Login with Google</button>
            </div>
           
        </div>
    )
}
export default LoginScreen;