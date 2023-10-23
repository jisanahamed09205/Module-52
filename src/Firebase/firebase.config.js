// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9Ha_uVQ8NpKKcOEe6C_yxz1OtsethPs",
  authDomain: "auth-dragon-news-with-react.firebaseapp.com",
  projectId: "auth-dragon-news-with-react",
  storageBucket: "auth-dragon-news-with-react.appspot.com",
  messagingSenderId: "916451808191",
  appId: "1:916451808191:web:0c3870f22bbbc81e17470a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);