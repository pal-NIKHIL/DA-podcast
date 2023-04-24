import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBcUp7NUHcss_O2acHf2zaOd0RtnHnxutQ",
    authDomain: "podcast-55e81.firebaseapp.com",
    projectId: "podcast-55e81",
    storageBucket: "podcast-55e81.appspot.com",
    messagingSenderId: "965359599893",
    appId: "1:965359599893:web:e5212245be8faac99fa91c",
    measurementId: "G-1Z77HG1SJR"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};