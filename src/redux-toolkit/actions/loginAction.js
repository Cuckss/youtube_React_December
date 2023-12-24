import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { Provider } from "react-redux";

const googleProvider=new GoogleAuthProvider();

  const loginUserWithGoogle=createAsyncThunk("login/user",async(_,thunkAPI)=>{
 
try{
   const result=await signInWithPopup(auth, googleProvider)
  Provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl") 
//    const accessToken=result.user.accessToken;
//    console.log(accessToken)
   const user=result.user;
   console.log("user is--->",user)
//    console.log("the user is: ", user)
   //  const accessToken = result.credential.accessToken;
   //   console.log("Access Token is--->", accessToken);
   const profile={
    name:result._tokenResponse.displayName,
    photoUrl:result._tokenResponse.photoUrl,
   }
   console.log("login details are:",result.data)
   console.log(profile)
   console.log(result);
   
   
}catch(e){
    thunkAPI.rejectWithValue(e);
}

})
export default loginUserWithGoogle;