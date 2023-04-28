// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAt6VOnQSzKhDlyM7FJqIhBtB85PFutRd4",
  authDomain: "dashboard-task-app.firebaseapp.com",
  projectId: "dashboard-task-app",
  storageBucket: "dashboard-task-app.appspot.com",
  messagingSenderId: "890090837500",
  appId: "1:890090837500:web:2c7fff166495683b97ce79",
  measurementId: "G-80WR0SLR0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider}; 
