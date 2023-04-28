// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQxpkSuo4jR-sZ2dPIWLgJnZ2dSsorl0k",
    authDomain: "task-app-659c6.firebaseapp.com",
    projectId: "task-app-659c6",
    storageBucket: "task-app-659c6.appspot.com",
    messagingSenderId: "133883107485",
    appId: "1:133883107485:web:03725eeba15e37579a5c74",
    measurementId: "G-B4CV4CPQ3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider}; 
