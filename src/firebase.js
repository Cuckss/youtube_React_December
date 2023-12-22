// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0RJvuNkl7z7mAShBL36OgWvQYEer4wc0",
  authDomain: "react-december.firebaseapp.com",
  projectId: "react-december",
  storageBucket: "react-december.appspot.com",
  messagingSenderId: "948171800854",
  appId: "1:948171800854:web:0809f93bee92291db95037"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);